const express = require("express");
const db = require("../db/models");
const { csrfProtection, asyncHandler } = require("./utils");
//const sequelize = require("sequelize");

const router = express.Router();

router.get(
    "/",
    asyncHandler(async(req, res) => {
        const questions = await db.QuestionVote.findAll({
            include: [db.User, db.Question],
            order: [
                ["updatedAt", "ASC"]
            ],
        });
        console.log(questions[0]);
        res.render("questions", { title: "Top Questions", questions });
    })
);

module.exports = router;