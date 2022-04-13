const express = require("express");
const { check, validationResult } = require("express-validator");
const db = require("../db/models");
const { csrfProtection, asyncHandler } = require("./utils");
const { requireAuth } = require("../auth");
//const sequelize = require("sequelize");

const router = express.Router();

router.get(
    "/",
    asyncHandler(async(req, res) => {
        const questions = await db.Question.findAll({
            include: [db.User, db.QuestionVote],
            // where: { isUpvote: true},
            order: [
                ["updatedAt", "DESC"]
            ],
        });
        const questionVotes = await db.QuestionVote.findAll();
        const voteCollection = {};
        // console.log(questions)
        questionVotes.forEach((questionVote) => {
            // const question = await db.Question.findByPk(questionVote.questionId)

            if (!voteCollection[`${questionVote.questionId}vote`]) {
                voteCollection[`${questionVote.questionId}vote`] = 0;
            }
            if (questionVote.isUpvote === true) {
                voteCollection[`${questionVote.questionId}vote`] += 1;
            } else {
                voteCollection[`${questionVote.questionId}vote`] -= 1;
            }
            // console.log("************", question)

            // console.log("---------" , questionVote.Question)
            // console.log("Question upvotes: ", questionVote.Question.upvotes)
        });
        // res.send("ok")
        // console.log("vote collection ", voteCollection)
        res.render("questions", {
            title: "Top Questions",
            questions,
            voteCollection,
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
    asyncHandler(async(req, res) => {
        const questionId = parseInt(req.params.id, 10);
        const question = await db.Question.findByPk(questionId, {
            include: [db.User, db.QuestionVote],
        });
        const answers = await db.Answer.findAll({
            where: {
                questionId: question.id,
            },
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

        res.render("question-details", {
            question,
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
    "/",
    csrfProtection,
    requireAuth,
    questionValidators,
    asyncHandler(async(req, res) => {
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
    asyncHandler(async(req, res) => {
        const questionId = parseInt(req.params.id, 10);
        const question = await db.Question.findByPk(questionId);

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
    asyncHandler(async(req, res) => {
        console.log("You are here.");
        const questionId = parseInt(req.params.id, 10);
        const questionToUpdate = await db.Question.findByPk(questionId);

        const { title, content, createdAt, userId } = req.body;

        const question = { title, content, createdAt, userId };

        const validatorErrors = validationResult(req);
        console.log("************", question);
        console.log("************", questionToUpdate);
        if (validatorErrors.isEmpty()) {
            console.log("===============", question);
            console.log("===============", questionToUpdate);
            await questionToUpdate.update(question);
            console.log("HELLO!!!!!!!!!");
            res.redirect(`/questions/${questionId}`);
        } else {
            const errors = validatorErrors.array().map((error) => error.msg);
            res.render("question-edit", {
                formTitle: "Edit Question",
                createdAt,
                question: {...question, id: questionId },
                errors,
                csrfToken: req.csrfToken(),
            });
        }

        res.redirect();
    })
);

module.exports = router;