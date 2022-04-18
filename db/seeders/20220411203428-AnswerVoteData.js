"use strict";
const {answerVotes} = require('../../public/javascripts/upvotes')

module.exports = {
    up: (queryInterface, Sequelize) => {
        /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
        return queryInterface.bulkInsert(
            "AnswerVotes",
            [
                {
                    userId: 1,
                    answerId: 2,
                    isUpvote: true,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    userId: 2,
                    answerId: 1,
                    isUpvote: true,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    userId: 4,
                    answerId: 2,
                    isUpvote: true,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    userId: 3,
                    answerId: 2,
                    isUpvote: false,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                ...answerVotes(10, 13, false),
                ...answerVotes(6, 1, true),
                ...answerVotes(23, 4, true),
                ...answerVotes(11, 5, true),
                ...answerVotes(54, 1, true),
                ...answerVotes(14, 14, true),
                ...answerVotes(13, 7, false),
                ...answerVotes(19, 11, true),
                ...answerVotes(8, 10, false),
                ...answerVotes(7, 12, false),
                ...answerVotes(9, 6, true),
                ...answerVotes(17, 9, true),
                ...answerVotes(18, 16, false),
                ...answerVotes(1, 15, true),
                ...answerVotes(2, 8, true),
            ],
            {}
        );
    },

    down: (queryInterface, Sequelize) => {
        /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
        return queryInterface.bulkDelete("AnswerVotes", null, {});
    },
};
