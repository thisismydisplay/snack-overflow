const express = require("express");
const { check, validationResult } = require("express-validator");
const db = require("../db/models");
const { csrfProtection, asyncHandler, checkPermissions } = require("./utils");
const { requireAuth, restoreUser } = require("../auth");
const res = require("express/lib/response");
//const sequelize = require("sequelize");

const router = express.Router();

// const checkPermissions = (resource, currentUser) => {
//   if (resource.userId !== currentUser.id) {
//     const err = new Error('Illegal operation.');
//     err.status = 403;
//     throw err;
//   }
// };

function dateAdjustLogic(resource) {
    let createdAt = resource.createdAt.toString();
    let cIndex = createdAt.indexOf("GMT");
    let updatedAt = resource.updatedAt.toString();
    let uIndex = updatedAt.indexOf("GMT");
    createdAt = createdAt.slice(0, cIndex - 1);
    updatedAt = updatedAt.slice(0, uIndex - 1);
    resource.createdAtShort = createdAt;
    resource.updatedAtShort = updatedAt;
    let now = new Date();







    let updatedDate = new Date(resource.updatedAt);
    console.log(updatedAt);
    console.log(now);
    let daysAgo = now.getDay() - updatedDate.getDay();
    let hoursAgo = now.getHours() - updatedDate.getHours();
    let minutesAgo = now.getMinutes() - updatedDate.getMinutes();
    let secondsAgo = now.getSeconds() - updatedDate.getSeconds();

    if (daysAgo) resource.timeAgo = `${daysAgo} days ago`;
    else if (hoursAgo) resource.timeAgo = `${hoursAgo} hours ago`;
    else if (minutesAgo) resource.timeAgo = `${minutesAgo} minutes ago`;
    else if (secondsAgo) resource.timeAgo = `${secondsAgo} seconds ago`;
    else if (!daysAgo && !hoursAgo && !minutesAgo && !secondsAgo) resource.timeAgo = "just now";
    else resource.timeAgo = "0 seconds ago";
}
function dateAdjust(resourcesObject) {
    //TO DO: DRY
    // console.log('THIS IS A RESOURCE OBJECT', resourcesObject);
    if (resourcesObject.length) {
        resourcesObject.forEach((resource) => {
            dateAdjustLogic(resource);
        });
        // You have to explicitly state what to do if the resObj is 0 otherwise it'll throw a TypeError.
    } else if (resourcesObject.length === 0) {
        return resourcesObject;
    } else {
        dateAdjustLogic(resourcesObject);
    }
}

router.get(
    "/",
    asyncHandler(async (req, res) => {
        const questions = await db.Question.findAll({
            include: [db.User, db.QuestionVote],
            // where: { isUpvote: true},
            order: [["updatedAt", "DESC"]],
        });

        const questionVotes = await db.QuestionVote.findAll();
        const answers = await db.Answer.findAll();
        const voteCollection = {};
        const answerCollection = {};
        // console.log(questions)

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
        // res.send("ok")

        dateAdjust(questions);

        // questions.forEach(question=>{
        //     let createdAt = question.createdAt.toString();
        //     let cIndex = createdAt.indexOf('GMT');
        //     let updatedAt = question.updatedAt.toString();
        //     let uIndex = updatedAt.indexOf('GMT')
        //     createdAt = createdAt.slice(0, cIndex-1)
        //     updatedAt = updatedAt.slice(0, uIndex-1)
        //     question.createdAtShort = createdAt;
        //     question.updatedAtShort = updatedAt;
        //     let now = new Date();

        //     let updatedDate = new Date(question.updatedAt)
        //     console.log(updatedAt)
        //     console.log(now)
        //     let daysAgo = now.getDay() - updatedDate.getDay();
        //     let hoursAgo = now.getHours() - updatedDate.getHours()
        //     let minutesAgo = now.getMinutes() - updatedDate.getMinutes();
        //     let secondsAgo = now.getSeconds() - updatedDate.getSeconds();

        //     if (daysAgo) question.timeAgo = `${daysAgo} days ago`;
        //     else if (hoursAgo) question.timeAgo = `${hoursAgo} hours ago`;
        //     else if (minutesAgo) question.timeAgo = `${minutesAgo} minutes ago`;
        //     else if (secondsAgo) question.timeAgo = `${secondsAgo} seconds ago`;
        //     else question.timeAgo = '0 seconds ago'

        // })

        console.log("vote collection ", voteCollection);
        res.render("questions", {
            title: "Top Questions",
            questions,
            voteCollection,
            answerCollection,
        });
    })

    // const sumVotes = question.upVotes - question.downVotes
    // const question = await db.Question.findByPk(2)
    // console.log("===================", question)

    // console.log(questions.length)

    // questions.forEach(async(question) => {
    //     question.upVotes = 0
    //     question.downVotes = 0
    //     const votes = await db.QuestionVote.findAll({
    //         where: { questionId: question.id}
    //     })
    //     console.log("votes: ", votes)
    //     votes.forEach(vote => {
    //         if(vote.isUpvote === true) {
    //             question.upVotes += 1
    //             console.log("question upVotes: ", question.upVotes)
    //             // console.log("question: ", question)
    //         } else {
    //             question.downVotes += 1
    //             console.log("question downVotes: ", question.downVotes)
    //             // console.log("question: ", question)
    //         }
    //     })
    //     // const sumVotes = question.upVotes - question.downVotes
    // })

    // // console.log("Questions[0] upvotes: ", questions[0].upVotes);
    // console.log("questions before render: ", questions)
    // res.render("questions", { title: "Top Questions",  });
);

router.get(
    "/:id(\\d+)",
    asyncHandler(async (req, res) => {
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
        if (!answers) answers.length = 0;

        const questionVotes = await db.QuestionVote.findAll();
        const voteCollection = {};

        const answerVotes = await db.AnswerVote.findAll();
        const answerVotesCollection = {};

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

        //////paste/
        // const thisQuestionVotes = await db.QuestionVote.findAll({
        //     where: {
        //         questionId: req.params.id,
        //     },
        //     // include: [db.QuestionVote],
        // });
        // const {type} = req.body;
        // let hasVote = false;
        // let questionVoteId;
        // thisQuestionVotes.forEach((vote) => {
        //     if ((vote.userId === req.session.auth.userId)) {
        //         console.log("inside questionvotes iterating over:")
        //         console.log("----------req.session.auth.userId", req.session.auth.userId)
        //         console.log("----------vote.userId",vote.userId)
        //         hasVote = true;
        //         questionVoteId = vote.id;
        //         if (hasVote) {
        //             if(vote.isUpvote){

        //             } else {

        //             }
        //         }

        //     }
        // });

        // let isQuestionUser = false;
        // console.log(res.locals.user.id);
        // console.log(question.id);
        // if (res.locals.user.id == question.id) isQuestionUser = true;
        // console.log(isQuestionUser);

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

router.post(
    "/add",
    csrfProtection,
    requireAuth,
    restoreUser,
    questionValidators,
    asyncHandler(async (req, res) => {
        const { title, content } = req.body;
        //console.log('----------', req.body)
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

router.get("/add", csrfProtection, (req, res) => {
    res.render("question-add", {
        formTitle: "Add Question",
        title: "test",
        content: "test",
        csrfToken: req.csrfToken(),
    });
});

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
            question,
            questionId,
            csrfToken: req.csrfToken(),
        });
    })
);

router.post(
    "/:id(\\d+)/edit",
    csrfProtection,
    requireAuth,
    restoreUser,
    questionValidators,
    asyncHandler(async (req, res) => {
        console.log("You are here.");
        const questionId = parseInt(req.params.id, 10);
        const questionToUpdate = await db.Question.findByPk(questionId);

        // console.log("HELOOOOOOO-----------------", res.locals.user)
        // console.log("this is question to update", questionToUpdate)

        checkPermissions(questionToUpdate, res.locals.user);

        const { title, content, createdAt, userId } = req.body;

        const question = { title, content, createdAt, userId };

        const validatorErrors = validationResult(req);
        // console.log("************", question);
        // console.log("************", questionToUpdate);
        if (validatorErrors.isEmpty()) {
            // console.log("===============", question);
            // console.log("===============", questionToUpdate);
            await questionToUpdate.update(question);
            // console.log("HELLO!!!!!!!!!");
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

        // res.redirect();
    })
);

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
            question,
            csrfToken: req.csrfToken(),
        });
    })
);
// move to questions route
const answerValidators = [
    check("content")
        .exists({ checkFalsy: true })
        .withMessage("Please provide content for your answer")
        .isLength({ max: 2000 })
        .withMessage("Max length 2000 characters, please be more concise"),
];

router.post(
    "/:id(\\d+)/answer/add",
    csrfProtection,
    requireAuth,
    restoreUser,
    answerValidators,
    asyncHandler(async (req, res) => {
        const questionId = parseInt(req.params.id, 10);
        const { content } = req.body;
        //console.log('----------', req.body)
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

router.post(
    "/:id(\\d+)/vote",
    requireAuth,
    restoreUser,
    asyncHandler(async (req, res) => {
        console.log("INSIDE THE ROUTER!!!");
        const questionVotes = await db.QuestionVote.findAll({
            where: {
                questionId: req.params.id,
            },
            // include: [db.QuestionVote],
        });
        const { type } = req.body;
        console.log(questionVotes);
        let hasVote = false;
        let hasUpvote = false;
        let hasDownvote = false;
        let questionVoteId;
        questionVotes.forEach((vote) => {
            if (vote.userId === req.session.auth.userId) {
                console.log("inside questionvotes iterating over:");
                console.log(
                    "----------req.session.auth.userId",
                    req.session.auth.userId
                );
                console.log("----------vote.userId", vote.userId);
                hasVote = true;

                questionVoteId = vote.id;

                if (vote.isUpvote) {
                    hasUpvote = true;
                } else {
                    hasDownvote = true;
                }
            }
        });

        // await answer.destroy();
        // console.log('you have arrived at the delete route: ', req.params.id)
        if (hasVote) {
            if (
                (type === "upvote" && hasUpvote) ||
                (type === "downvote" && hasDownvote)
            ) {
                console.log("inside if");
                const thisVote = await db.QuestionVote.findByPk(questionVoteId);
                await thisVote.destroy();
                res.json({ message: "Removed" });
            } else {
                res.json({ message: "Cannot upvote and downvote" });
            }
        } else {
            console.log("inside else");
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
            // include: [db.QuestionVote],
        });
        let qType = "none";
        questionVotes.forEach((vote) => {
            if (vote.userId === req.session.auth.userId) {
                console.log("inside questionvotes iterating over:");
                console.log(
                    "----------req.session.auth.userId",
                    req.session.auth.userId
                );
                console.log("----------vote.userId", vote.userId);
                hasVote = true;

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
