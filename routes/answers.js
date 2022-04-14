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

module.exports = router;
