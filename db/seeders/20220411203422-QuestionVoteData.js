"use strict";
const {questionVotes} = require('../../public/javascripts/upvotes')
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
                ...questionVotes(81, 13, false),
                ...questionVotes(6, 1, true),
                ...questionVotes(23, 4, true),
                ...questionVotes(11, 5, true),
                ...questionVotes(54, 1, true),
                ...questionVotes(14, 14, true),
                ...questionVotes(81, 7, false),
                ...questionVotes(19, 11, true),
                ...questionVotes(8, 10, false),
                ...questionVotes(34, 12, false),
                ...questionVotes(45, 6, true),
                ...questionVotes(17, 9, true),
                ...questionVotes(18, 16, false),
                ...questionVotes(3, 15, true),
                ...questionVotes(3, 8, true),

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
