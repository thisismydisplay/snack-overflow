"use strict";

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
