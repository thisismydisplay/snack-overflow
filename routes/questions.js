const express = require("express");
const db = require("../db/models");
const { csrfProtection, asyncHandler } = require("./utils");
//const sequelize = require("sequelize");

const router = express.Router();

router.get(
    "/",
    asyncHandler(async (req, res) => {

        const questions = await db.Question.findAll({
            include: [db.User, db.QuestionVote],
            // where: { isUpvote: true},
            order: [["updatedAt", "ASC"]],
        });
        const questionVotes = await db.QuestionVote.findAll()
        const voteCollection = {}
        console.log(questions)
        questionVotes.forEach(questionVote => {

            // const question = await db.Question.findByPk(questionVote.questionId)

            if (!voteCollection[`${questionVote.questionId}vote`]) {
                voteCollection[`${questionVote.questionId}vote`] = 0
            }
            if (questionVote.isUpvote === true) {
                voteCollection[`${questionVote.questionId}vote`] += 1
            } else {
                voteCollection[`${questionVote.questionId}vote`] -= 1
            }
            // console.log("************", question)

            // console.log("---------" , questionVote.Question)
            // console.log("Question upvotes: ", questionVote.Question.upvotes)
        })
        // res.send("ok")
        console.log("vote collection ", voteCollection)
        res.render("questions", { title: "Top Questions", questions, voteCollection });
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



module.exports = router;
