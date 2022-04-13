const express = require("express");
const { check, validationResult } = require("express-validator");
const db = require("../db/models");
const { csrfProtection, asyncHandler, checkPermissions } = require("./utils");
const { requireAuth, restoreUser } = require("../auth");
const res = require("express/lib/response");

const router = express.Router();

router.get("/add", csrfProtection, (req, res) => {
    res.render("answer-add", {
        formTitle: "Add Answer",
        csrfToken: req.csrfToken(),
    });
});
// move to questions route
const answerValidators = [
    check("content")
    .exists({ checkFalsy: true })
    .withMessage("Please provide content for your answer")
    .isLength({ max: 2000 })
    .withMessage("Max length 2000 characters, please be more concise"),
];

router.post(
    "/add",
    csrfProtection,
    requireAuth,
    restoreUser,
    answerValidators,
    asyncHandler(async(req, res) => {
        const { content } = req.body;
        //console.log('----------', req.body)
        const answer = await db.Answer.build({
            content,
            userId: req.session.auth.userId,
        });
        const validatorErrors = validationResult(req);
        if (validatorErrors.isEmpty()) {
            await answer.save();
            res.redirect("/questions/");
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
