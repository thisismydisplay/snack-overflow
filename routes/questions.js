const express = require("express");
const { check, validationResult } = require("express-validator");
const db = require("../db/models");
const { csrfProtection, asyncHandler, checkPermissions } = require("./utils");
const { requireAuth, restoreUser } = require("../auth");
const res = require("express/lib/response");

const router = express.Router();

// function to adjust date format and presentation
function dateAdjustLogic(resource) {
    let createdAt = resource.createdAt.toString();
    let cIndex = createdAt.indexOf("GMT");
    let updatedAt = resource.updatedAt.toString();
    let uIndex = updatedAt.indexOf("GMT");

    // generate short strings of date info and attach to resource
    createdAt = createdAt.slice(0, cIndex - 1);
    updatedAt = updatedAt.slice(0, uIndex - 1);
    resource.createdAtShort = createdAt;
    resource.updatedAtShort = updatedAt;
    let now = new Date();

    let updatedDate = new Date(resource.updatedAt);

    // handle singular and plural
    const adjustString = (type, string) => {
        return `${type} ${string}${type > 1 ? "s" : ""} ago`;
    };

    //find diference in milliseconds between stored time and now
    let diffTime = now.getTime() - updatedDate.getTime();

    //check time in increasingly smaller increments and return appropriate measure

    const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    if (days) return adjustString(days, "day");
    const hrs = Math.floor(diffTime / (1000 * 60 * 60));
    if (hrs) return adjustString(hrs, "hr");
    const minutes = Math.floor(diffTime / (1000 * 60));
    if (minutes) return adjustString(minutes, "minute");
    const seconds = Math.floor(diffTime / 1000);

    if (seconds) return adjustString(seconds, "second");
    return "just now";
}
function dateAdjust(resourcesObject) {

    // check if single resource or array of resource and call dateAdjustLogic accordingly
    if (resourcesObject.length) {
        resourcesObject.forEach((resource) => {
            resource.timeAgo = dateAdjustLogic(resource);
        });
        // You have to explicitly state what to do if the resObj is 0 otherwise it'll throw a TypeError.
    } else if (resourcesObject.length === 0) {
        return resourcesObject;
    } else {
        resourcesObject.timeAgo = dateAdjustLogic(resourcesObject);
    }
}

router.get(
    "/",
    asyncHandler(async (req, res) => {
        const questions = await db.Question.findAll({
            include: [db.User, db.QuestionVote],
            order: [["updatedAt", "DESC"]],
        });

        const questionVotes = await db.QuestionVote.findAll();
        const answers = await db.Answer.findAll();

        // create object to store votes
        const voteCollection = {};

        // create object to store answers
        const answerCollection = {};

        //iterate through QuestionVotes to track number of votes for each question
        questionVotes.forEach((questionVote) => {
            //if voteCollection does not have key for question, create key with value 0;
            if (!voteCollection[`${questionVote.questionId}vote`]) {
                voteCollection[`${questionVote.questionId}vote`] = 0;
            }

            //increment the question's vote count if upvote, decrement if downvote
            if (questionVote.isUpvote === true) {
                voteCollection[`${questionVote.questionId}vote`] += 1;
            } else {
                voteCollection[`${questionVote.questionId}vote`] -= 1;
            }
        });

        //iterate through answers to track number of answers for each question
        answers.forEach((answer) => {
            //if answerCollection does not have key for question, create key with value 1
            if (!answerCollection[`${answer.questionId}numAnswers`]) {
                answerCollection[`${answer.questionId}numAnswers`] = 1;
            }
            //if key exists increment by 1
            else {
                answerCollection[`${answer.questionId}numAnswers`] += 1;
            }
        });

        dateAdjust(questions);

        // assign avatar to each question
        questions.forEach((question) => {
            question.avatar = `https://api.minimalavatars.com/avatar/${question.User.username}/png`;
        });
        res.render("questions", {
            title: "Top Questions",
            questions,
            voteCollection,
            answerCollection,
        });
    })

);

router.get(
    "/:id(\\d+)",
    asyncHandler(async (req, res) => {
        // get question id from url
        const questionId = parseInt(req.params.id, 10);

        const question = await db.Question.findByPk(questionId, {
            include: [db.User, db.QuestionVote],
        });

        const answers = await db.Answer.findAll({
            where: {
                questionId: question.id,
            },
            order: [["createdAt", "ASC"]],
            include: [db.User, db.AnswerVote],
        });

        // if no answers, set answer.length property to 0
        if (!answers) answers.length = 0;

        const questionVotes = await db.QuestionVote.findAll();
        const voteCollection = {};

        const answerVotes = await db.AnswerVote.findAll();
        const answerVotesCollection = {};

        // attach votes to vote object for each question
        questionVotes.forEach((questionVote) => {
            if (!voteCollection[`${questionVote.questionId}vote`]) {
                voteCollection[`${questionVote.questionId}vote`] = 0;
            }
            if (questionVote.isUpvote === true) {
                voteCollection[`${questionVote.questionId}vote`] += 1;
            } else {
                voteCollection[`${questionVote.questionId}vote`] -= 1;
            }
        });

        // attach answer votes to each answer
        answerVotes.forEach((AnswerVote) => {
            if (!answerVotesCollection[`${AnswerVote.answerId}vote`]) {
                answerVotesCollection[`${AnswerVote.answerId}vote`] = 0;
            }
            if (AnswerVote.isUpvote === true) {
                answerVotesCollection[`${AnswerVote.answerId}vote`] += 1;
            } else {
                answerVotesCollection[`${AnswerVote.answerId}vote`] -= 1;
            }
            console.log(answerVotesCollection);
        });

        let loggedInUser;
        if (req.session.auth) {
            loggedInUser = req.session.auth.userId;
        }

        // set avatars
        answers.forEach((answer) => {
            answer.avatar = `https://api.minimalavatars.com/avatar/${answer.User.username}/png`;
        });
        question.avatar = `https://api.minimalavatars.com/avatar/${question.User.username}/png`;

        dateAdjust(answers);
        dateAdjust(question);

        res.render("question-details", {
            question,
            // isQuestionUser,
            title: question.title,
            loggedInUser,
            votes: voteCollection[`${question.id}vote`],
            answers,
            answerVotesCollection,
        });
    })
);

const questionValidators = [
    check("title")
        .exists({ checkFalsy: true })
        .withMessage("Please provide a value for title")
        .isLength({ min: 2, max: 100 })
        .withMessage("Title must be between 2 and 100 characters"),
    check("content")
        .exists({ checkFalsy: true })
        .withMessage("Please provide content for your question")
        .isLength({ max: 2000 })
        .withMessage("Max length 2000 characters, please be more concise"),
];

// post route to add question
router.post(
    "/add",
    csrfProtection,
    requireAuth,
    restoreUser,
    questionValidators,
    asyncHandler(async (req, res) => {
        const { title, content } = req.body;
        const question = await db.Question.build({
            title,
            content,
            userId: req.session.auth.userId,
        });
        const validatorErrors = validationResult(req);
        if (validatorErrors.isEmpty()) {
            await question.save();
            res.redirect("/questions");
        } else {
            const errors = validatorErrors.array().map((error) => error.msg);
            res.render("question-add", {
                formTitle: "Add Question",
                title: question.title,
                content: question.content,
                question,
                errors,
                csrfToken: req.csrfToken(),
            });
        }
    })
);

// get route for add question
router.get("/add", csrfProtection, (req, res) => {
    res.render("question-add", {
        formTitle: "Add Question",
        title: "Ask a public question",
        content: "",
        csrfToken: req.csrfToken(),
    });
});

// get route to edit question
router.get(
    "/:id(\\d+)/edit",
    csrfProtection,
    requireAuth,
    restoreUser,
    asyncHandler(async (req, res) => {
        const questionId = parseInt(req.params.id, 10);
        const question = await db.Question.findByPk(questionId);

        checkPermissions(question, res.locals.user);

        res.render("question-edit", {
            title: "Edit your question",
            question,
            questionId,
            csrfToken: req.csrfToken(),
        });
    })
);

// post route to edit question
router.post(
    "/:id(\\d+)/edit",
    csrfProtection,
    requireAuth,
    restoreUser,
    questionValidators,
    asyncHandler(async (req, res) => {
        const questionId = parseInt(req.params.id, 10);
        const questionToUpdate = await db.Question.findByPk(questionId);

        checkPermissions(questionToUpdate, res.locals.user);

        const { title, content, createdAt, userId } = req.body;

        const question = { title, content, createdAt, userId };

        const validatorErrors = validationResult(req);

        if (validatorErrors.isEmpty()) {
            await questionToUpdate.update(question);
            res.redirect(`/questions/${questionId}`);
        } else {
            const errors = validatorErrors.array().map((error) => error.msg);
            res.render("question-edit", {
                formTitle: "Edit Question",
                createdAt,
                question: { ...question, id: questionId },
                errors,
                csrfToken: req.csrfToken(),
            });
        }

    })
);

//get route to delete question
router.get(
    "/:id(\\d+)/delete",
    csrfProtection,
    requireAuth,
    restoreUser,
    asyncHandler(async (req, res) => {
        const questionId = parseInt(req.params.id, 10);
        const question = await db.Question.findByPk(questionId);

        checkPermissions(question, res.locals.user);

        res.render("question-delete", {
            question,
            csrfToken: req.csrfToken(),
        });
    })
);
// post route to delete question
router.post(
    "/:id(\\d+)/delete",
    csrfProtection,
    requireAuth,
    restoreUser,
    asyncHandler(async (req, res) => {
        const questionId = parseInt(req.params.id, 10);
        const question = await db.Question.findByPk(questionId);

        checkPermissions(question, res.locals.user);

        await question.destroy();
        res.redirect("/questions");
    })
);

// get route to add answer
router.get(
    "/:id(\\d+)/answer/add",
    csrfProtection,
    requireAuth,
    restoreUser,
    asyncHandler(async (req, res) => {
        const questionId = parseInt(req.params.id, 10);
        const question = await db.Question.findByPk(questionId);
        res.render("answer-add", {
            formTitle: "Add Answer",
            title: "Add your answer",
            question,
            csrfToken: req.csrfToken(),
        });
    })
);

const answerValidators = [
    check("content")
        .exists({ checkFalsy: true })
        .withMessage("Please provide content for your answer")
        .isLength({ max: 2000 })
        .withMessage("Max length 2000 characters, please be more concise"),
];

//post route to add answer
router.post(
    "/:id(\\d+)/answer/add",
    csrfProtection,
    requireAuth,
    restoreUser,
    answerValidators,
    asyncHandler(async (req, res) => {
        const questionId = parseInt(req.params.id, 10);
        const { content } = req.body;
        const answer = await db.Answer.build({
            content,
            questionId,
            userId: req.session.auth.userId,
        });
        const validatorErrors = validationResult(req);
        if (validatorErrors.isEmpty()) {
            await answer.save();
            res.redirect(`/questions/${questionId}`);
        } else {
            const errors = validatorErrors.array().map((error) => error.msg);
            const question = { id: questionId };
            res.render("answer-add", {
                formTitle: "Add Answer",
                content: answer.content,
                question,
                answer,
                errors,
                csrfToken: req.csrfToken(),
            });
        }
    })
);

// post route to manipulate votes
router.post(
    "/:id(\\d+)/vote",
    requireAuth,
    restoreUser,
    asyncHandler(async (req, res) => {
        const questionVotes = await db.QuestionVote.findAll({
            where: {
                questionId: req.params.id,
            },
        });
        const { type } = req.body;
        console.log(questionVotes);
        let hasVote = false;
        let hasUpvote = false;
        let hasDownvote = false;
        let questionVoteId;
        questionVotes.forEach((vote) => {
            if (vote.userId === req.session.auth.userId) {

                hasVote = true;

                questionVoteId = vote.id;

                if (vote.isUpvote) {
                    hasUpvote = true;
                } else {
                    hasDownvote = true;
                }
            }
        });

        // if vote already exists destroy if match
        if (hasVote) {
            if (
                (type === "upvote" && hasUpvote) ||
                (type === "downvote" && hasDownvote)
            ) {
                const thisVote = await db.QuestionVote.findByPk(questionVoteId);
                await thisVote.destroy();
                res.json({ message: "Removed" });
            } else {
                res.json({ message: "Cannot upvote and downvote" });
            }
        } else {
            //create if vote doesn't exist
            if (type === "upvote") {
                await db.QuestionVote.create({
                    userId: req.session.auth.userId,
                    questionId: req.params.id,
                    isUpvote: true,
                });
            } else {
                await db.QuestionVote.create({
                    userId: req.session.auth.userId,
                    questionId: req.params.id,
                    isUpvote: false,
                });
            }
            res.json({ message: "Success" });
        }
    })
);

//get route for votes
router.get(
    "/:id(\\d+)/vote",
    requireAuth,
    restoreUser,
    asyncHandler(async (req, res) => {
        const questionId = req.params.id;
        const questionVotes = await db.QuestionVote.findAll({
            where: {
                questionId: req.params.id,
            },
        });
        let qType = "none";
        questionVotes.forEach((vote) => {
            if (vote.userId === req.session.auth.userId) {

                hasVote = true;
                // return vote type
                if (vote.isUpvote) {
                    qType = "upvote";
                } else {
                    qType = "downvote";
                }
            }
        });
        res.json({ qType });
    })
);

module.exports = router;
