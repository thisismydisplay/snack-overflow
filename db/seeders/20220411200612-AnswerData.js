"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
        return queryInterface.bulkInsert(
            "Answers",
            [
                {
                    content: "Go with Best Choice",
                    userId: 2,
                    questionId: 1,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    content: "Test content 1",
                    userId: 3,
                    questionId: 1,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    content: "Test content 2",
                    userId: 4,
                    questionId: 3,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    content: "Test content 3",
                    userId: 5,
                    questionId: 4,
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
        return queryInterface.bulkDelete("Answers", null, {});
    },
};
