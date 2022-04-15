const express = require("express");
const { check, validationResult } = require("express-validator");
const db = require("../db/models");
const { asyncHandler } = require("./utils");
const { requireAuth, restoreUser } = require("../auth");
const res = require("express/lib/response");

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
        // get answer from database
        const answer = await db.Answer.findByPk(req.params.id);

        // validate answer
        const validatorErrors = validationResult(req);

        if (validatorErrors.isEmpty()) {
            // save new content and send response json
            answer.content = req.body.content;
            await answer.save();
            res.json({
                message: "Success",
                answer,
            });
        } else {
            // send errs
            const errors = validatorErrors.array().map((error) => error.msg);
            res.json({
                message: "Invalid content - must have text",
                answer,
            });;
        }
    })
);

router.delete('/:id(\\d+)', asyncHandler(async(req, res) => {
    // get answer from database and destroy it
    const answer = await db.Answer.findByPk(req.params.id)
    await answer.destroy()
    res.json({message: 'Success'})
}))

router.post(
    "/:id(\\d+)/vote",
    requireAuth,
    restoreUser,
    asyncHandler(async (req, res) => {
        // get answerVotes from database
        const answerVotes = await db.AnswerVote.findAll({
            where: {
                answerId: req.params.id,
            },
        });
        const { type } = req.body;
        let hasVote = false;
        let hasUpvote = false;
        let hasDownvote = false;
        let answerVoteId;

        //iterate over answerVotes
        answerVotes.forEach((vote) => {
            if (vote.userId === req.session.auth.userId) {
                // flag vote as belonging to logged in user
                hasVote = true;

                answerVoteId = vote.id;

                if (vote.isUpvote) {
                    hasUpvote = true;
                } else {
                    hasDownvote = true;
                }
            }
        });

        if (hasVote) {
            // delete vote if it user is removing an existing vote
            if ((type === 'upvote' && hasUpvote) || (type === 'downvote' && hasDownvote)){
                const thisVote = await db.AnswerVote.findByPk(answerVoteId);
                await thisVote.destroy();
                res.json({ message: "Removed" });
            } else {
                res.json({ message: "Cannot upvote and downvote"})
            }

        } else {
            // create vote if vote is new
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
    const answerId = req.params.id;

    // get answerVotes from database
    const answerVotes = await db.AnswerVote.findAll({
        where: {
            answerId: req.params.id,
        },
    });

    // send vote type as response
    let aType = 'none';
    answerVotes.forEach((vote) => {
        if (vote.userId === req.session.auth.userId) {
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
