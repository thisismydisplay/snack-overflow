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
                    content: "Ketchi",
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
                {
                    content: `First of all, let me say that the food is great .. made with fresh ingredients and portions are generous.
                    The only food related complaint is .. no matter how many times you ask them to make it "EXTRA EXTRA SPICY", it just doesn't happen.
                    It's barely spicy at all.
                    I used to call my orders in without issue until I received Hunan Beef instead of Szechuan Beef.
                    When I called to let them know a mistake was made (thinking they might've accidentally switched bags when packing), I was met with an incredibly argumentative tone and her insistence I ordered Hunan Beef NOT Szechuan Beef.  Mind you, I am giving feedback not complaining. When I assured her that due to a food allergy, I wouldn't have ordered Hunan Beef without special instructions, she persisted.  Finally I told her that I didn't call to argue with her but alert her to a small mistake.  Needless to say, you better believe I place ALLLLLL my orders online so I have written documentation in the event there's an issue with an order.`,
                    userId: 6,
                    questionId: 5,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    content: `You make a chicken sandwich by going through these 4 easy steps:
                    1.  Cut the chicken into small pieces.
                    2.  Fry the chicken pieces in a pan.
                    3.  Add the chopped vegetables to the pan.
                    4.  Add the mayonnaise and the mustard.
                    5.  Serve.`,
                    userId: 7,
                    questionId: 6,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    content: `Please don't ask questions that break our ToS. Banned.`,
                    userId: 5,
                    questionId: 7,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    content: `That seems just a LITTLE extreme. Don't you think?`,
                    userId: 17,
                    questionId: 7,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    content: `You'll love the one around the Golden Safari!!!! Definitely worth trying`,
                    userId: 63,
                    questionId: 7,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    content: `Definitely try out Eko Kitchen!`,
                    userId: 64,
                    questionId: 8,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    content: `Hmmm... I'm not sure. I'm not a fan of any food that can be eaten with bears.`,
                    userId: 46,
                    questionId: 9,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    content: `Even cake?`,
                    userId: 48,
                    questionId: 9,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    content: `Especially cake.`,
                    userId: 46,
                    questionId: 9,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    content: `Have you tried reduce?`,
                    userId: 15,
                    questionId: 10,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    content: `There's a corner restaurant called 'Week 6', definitely try it out!`,
                    userId: 14,
                    questionId: 10,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    content: `I, personally, suggest yellwo.`,
                    userId: 15,
                    questionId: 10,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    content: `You'll .`,
                    userId: 8,
                    questionId: 7,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    content: `Please don't ask non-food related questions. Banned.`,
                    userId: 8,
                    questionId: 7,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    content: `Please don't ask non-food related questions. Banned.`,
                    userId: 8,
                    questionId: 7,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    content: `Please don't ask non-food related questions. Banned.`,
                    userId: 8,
                    questionId: 7,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    content: `Please don't ask non-food related questions. Banned.`,
                    userId: 8,
                    questionId: 7,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    content: `Please don't ask non-food related questions. Banned.`,
                    userId: 8,
                    questionId: 7,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    content: `Please don't ask non-food related questions. Banned.`,
                    userId: 8,
                    questionId: 7,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    content: `Please don't ask non-food related questions. Banned.`,
                    userId: 8,
                    questionId: 7,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    content: `Please don't ask non-food related questions. Banned.`,
                    userId: 8,
                    questionId: 7,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    content: `Please don't ask non-food related questions. Banned.`,
                    userId: 8,
                    questionId: 7,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    content: `Please don't ask non-food related questions. Banned.`,
                    userId: 8,
                    questionId: 7,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    content: `Please don't ask non-food related questions. Banned.`,
                    userId: 8,
                    questionId: 7,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    content: `Please don't ask non-food related questions. Banned.`,
                    userId: 8,
                    questionId: 7,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    content: `Please don't ask non-food related questions. Banned.`,
                    userId: 8,
                    questionId: 7,
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
