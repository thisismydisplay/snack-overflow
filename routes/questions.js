const express = require("express");
const { check, validationResult } = require("express-validator");
const db = require("../db/models");
const { csrfProtection, asyncHandler } = require("./utils");
const { requireAuth } = require("../auth");
//const sequelize = require("sequelize");

const router = express.Router();



router.get(
    "/",
    asyncHandler(async (req, res) => {
        const questions = await db.Question.findAll({
            include: [db.User, db.QuestionVote],
            // where: { isUpvote: true},
            order: [["updatedAt", "DESC"]],
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
    asyncHandler(async (req, res) => {
        const { title, content } = req.body;
        console.log('----------', req.body)
        const question = await db.Question.build({
            title,
            content,
            userId: req.session.auth.userId,
        });
        const validatorErrors = validationResult(req);
        if (validatorErrors.isEmpty()) {
            await question.save();
            res.redirect('/questions');
          } else {
            const errors = validatorErrors.array().map((error) => error.msg);
            res.render('question-add', {
              formTitle: 'Add Question',
              title: question.title,
              content: question.content,
              question,
              errors,
              csrfToken: req.csrfToken(),
            });
          }
    })
);

router.get('/add', csrfProtection, (req, res) => {
    res.render("question-add", {formTitle: 'Add Question', title: 'test', content: 'test', csrfToken: req.csrfToken(),})
})

module.exports = router;
