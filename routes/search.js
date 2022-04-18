const express = require("express");
const db = require("../db/models");
const { asyncHandler } = require("./utils");
const Op = db.Sequelize.Op;

const router = express.Router();

// route for search results

router.post('/', asyncHandler(async (req, res) => {
    console.log(req.body);
    const { content } = req.body;
    const questions = await db.Question.findAll({
        where: {
            [Op.or]: {
                title: {
                    [Op.iLike]: `%${content}%`
                },
                content: {
                    [Op.iLike]: `%${content}%`
                }
            }
        }
    });
    res.json(questions);
}))


module.exports = router;
