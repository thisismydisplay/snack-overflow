"use strict";

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
