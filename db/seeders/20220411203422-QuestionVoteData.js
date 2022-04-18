"use strict";
const votes = require('../../public/javascripts/upvotes')
module.exports = {
    up: (queryInterface, Sequelize) => {
        /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
        return queryInterface.bulkInsert(
            "QuestionVotes",
            [
                {
                    userId: 1,
                    questionId: 2,
                    isUpvote: true,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    userId: 2,
                    questionId: 1,
                    isUpvote: true,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    userId: 4,
                    questionId: 2,
                    isUpvote: true,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    userId: 3,
                    questionId: 2,
                    isUpvote: false,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                ...votes(81, 13, false),
                ...votes(6, 1, true),
                ...votes(23, 4, true),
                ...votes(11, 5, true),
                ...votes(54, 1, true),
                ...votes(14, 14, true),
                ...votes(81, 7, false),
                ...votes(19, 11, true),
                ...votes(8, 10, false),
                ...votes(34, 12, false),
                ...votes(45, 6, true),
                ...votes(17, 9, true),
                ...votes(18, 16, false),
                ...votes(3, 15, true),
                ...votes(3, 8, true),

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
        return queryInterface.bulkDelete("QuestionVotes", null, {});
    },
};
