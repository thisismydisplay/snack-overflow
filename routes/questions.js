const express = require("express");
const db = require("../db/models");
const { csrfProtection, asyncHandler } = require("./utils");
//const sequelize = require("sequelize");

const router = express.Router();

router.get(
    "/",
    asyncHandler(async(req, res) => {
        const questions = await db.Question.findAll({
            order: [
                ["updatedAt", "ASC"]
            ],
        });

        res.render("questions", { title: "Top Questions", questions });
    })
);

module.exports = router;