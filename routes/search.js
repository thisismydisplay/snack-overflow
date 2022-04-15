const express = require("express");
const { check, validationResult } = require("express-validator");
const db = require("../db/models");
const { csrfProtection, asyncHandler, checkPermissions } = require("./utils");
const { requireAuth, restoreUser } = require("../auth");
const Op = db.Sequelize.Op;

const router = express.Router();

router.post('/', asyncHandler(async (req, res) => {
    console.log(req.body);
    const { content } = req.body;
    const questions = await db.Question.findAll({
        where: {
            title: {
                [Op.iLike]: `%${content}%`
            }
        }
    });
    console.log("HELOOOOOOOOOO", questions);
    res.json(questions);
}))


module.exports = router;
