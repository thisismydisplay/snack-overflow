
// const db = require("./db/models");
// const Op = db.Sequelize.Op;

const votes = (num, questId, vote) => {


    let array = [];
    for (let i = 1; i <= num; i++) {
        array.push({
            userId: i,
            questionId: questId,
            isUpvote: vote,
            createdAt: new Date(),
            updatedAt: new Date(),
        })
    }
    // console.log(array);
    return array;
}


module.exports = votes;
