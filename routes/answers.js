const express = require("express");
const { check, validationResult } = require("express-validator");
const db = require("../db/models");
const { csrfProtection, asyncHandler, checkPermissions } = require("./utils");
const { requireAuth, restoreUser } = require("../auth");
const res = require("express/lib/response");
//const sequelize = require("sequelize");

const router = express.Router();

const answerValidators = [
    check("content")
        .exists({ checkFalsy: true })
        .withMessage("Please provide content for your answer")
        .isLength({ max: 2000 })
        .withMessage("Max length 2000 characters, please be more concise"),
];

router.put(
    "/:id(\\d+)",
    answerValidators,
    asyncHandler(async (req, res) => {
        // console.log('from put route handler: ', req.body)
        const answer = await db.Answer.findByPk(req.params.id);
        // const {content} = req.body;
        const validatorErrors = validationResult(req);
        if (validatorErrors.isEmpty()) {
            answer.content = req.body.content;
            await answer.save();
            res.json({
                message: "Success",
                answer,
            });
        } else {
            const errors = validatorErrors.array().map((error) => error.msg);
            res.json({
                message: "Invalid content - must have text",
                answer,
            });;
        }
    })
);

router.delete('/:id(\\d+)', asyncHandler(async(req, res) => {
    const answer = await db.Answer.findByPk(req.params.id)

    await answer.destroy()
    // console.log('you have arrived at the delete route: ', req.params.id)
    res.json({message: 'Success'})
}))

router.post(
    "/:id(\\d+)/vote",
    requireAuth,
    restoreUser,
    asyncHandler(async (req, res) => {

        const answerVotes = await db.AnswerVote.findAll({
            where: {
                answerId: req.params.id,
            },
            // include: [db.QuestionVote],
        });
        const { type } = req.body;
        console.log(answerVotes);
        let hasVote = false;
        let hasUpvote = false;
        let hasDownvote = false;
        let answerVoteId;
        answerVotes.forEach((vote) => {
            if (vote.userId === req.session.auth.userId) {
                console.log("inside questionvotes iterating over:");
                console.log(
                    "----------req.session.auth.userId",
                    req.session.auth.userId
                );
                console.log("----------vote.userId", vote.userId);
                hasVote = true;

                answerVoteId = vote.id;

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
            if ((type === 'upvote' && hasUpvote) || (type === 'downvote' && hasDownvote)){

                console.log("inside if");
                const thisVote = await db.AnswerVote.findByPk(answerVoteId);
                await thisVote.destroy();
                res.json({ message: "Removed" });
            } else {
                res.json({ message: "Cannot upvote and downvote"})
            }

        } else {
            console.log("inside else");
            if (type === "upvote") {
                await db.AnswerVote.create({
                    userId: req.session.auth.userId,
                    answerId: req.params.id,
                    isUpvote: true,
                });
            } else {
                await db.AnswerVote.create({
                    userId: req.session.auth.userId,
                    answerId: req.params.id,
                    isUpvote: false,
                });
            }
            res.json({ message: "Success" });
        }
    })
);

router.get("/:id(\\d+)/vote",
requireAuth,
restoreUser,
asyncHandler(async (req, res) => {
    console.log("INSIDE THE GET ANSWERROUTER!!!");
    const answerId = req.params.id;
    const answerVotes = await db.AnswerVote.findAll({
        where: {
            answerId: req.params.id,
        },
        // include: [db.QuestionVote],
    });
    let aType = 'none';
    answerVotes.forEach((vote) => {
        if (vote.userId === req.session.auth.userId) {
            console.log("inside answervotes iterating over:");
            console.log(
                "----------req.session.auth.userId",
                req.session.auth.userId
            );
            console.log("----------vote.userId", vote.userId);
            hasVote = true;

            if (vote.isUpvote) {
                aType = "upvote"
            } else if (!vote.isUpvote) {
                aType = "downvote"
            }
        }
    });
    res.json({aType});
}));


module.exports = router;
