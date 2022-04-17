"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
        return queryInterface.bulkInsert(
            "Questions",
            [
                {
                    title: "Which brand of mustard is best",
                    content:
                        "Hi Snackers!  I am trying to figure out which brand of mustard is best for my marshmellows.  Please advise.",
                    userId: 1,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "Test Question 1",
                    content: "Test content 1",
                    userId: 2,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "Test Question 2",
                    content: "Test content 2",
                    userId: 1,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "Test Question 3",
                    content: "Test content 3",
                    userId: 4,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "Is Chinese food really tasty?",
                    content: `Leo won't shut up about it and I'm getting really annoyed. Please tell me!!!!!!!!!`,
                    userId: 5,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: 'How do I make a chicken sandwich?',
                    content: `I'm trying to make a chicken sandwich but I can't figure out how to do it. Please help!`,
                    userId: 3,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "Joon threw away my quesadilla. Said he prefers bibimbap with sauteed gochujang.",
                    content: `How do I make poison?`,
                    userId: 4,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "Are there any good Nigerian restaurants in the San Francisco area?",
                    content: `I'm looking to go try out new food!`,
                    userId: 51,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "I'm looking to take my bear to a good restaurant.",
                    content: ` Any suggestions?`,
                    userId: 47,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "Where can I try memails?",
                    content: `Title. Read it.`,
                    userId: 17,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "Recommend me some good tea. Thanks",
                    content: `Title.`,
                    userId: 6,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "Why is Hoon so mean to you?",
                    content: `Hoon is so mean to me. I don't know why.`,
                    userId: 6,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "Why is Hoon so mean to you?",
                    content: `Hoon is so mean to me. I don't know why.`,
                    userId: 6,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "Why is Hoon so mean to you?",
                    content: `Hoon is so mean to me. I don't know why.`,
                    userId: 6,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "Why is Hoon so mean to you?",
                    content: `Hoon is so mean to me. I don't know why.`,
                    userId: 6,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "Why is Hoon so mean to you?",
                    content: `Hoon is so mean to me. I don't know why.`,
                    userId: 6,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "Why is Hoon so mean to you?",
                    content: `Hoon is so mean to me. I don't know why.`,
                    userId: 6,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "Why is Hoon so mean to you?",
                    content: `Hoon is so mean to me. I don't know why.`,
                    userId: 6,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "Why is Hoon so mean to you?",
                    content: `Hoon is so mean to me. I don't know why.`,
                    userId: 6,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "Why is Hoon so mean to you?",
                    content: `Hoon is so mean to me. I don't know why.`,
                    userId: 6,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "Why is Hoon so mean to you?",
                    content: `Hoon is so mean to me. I don't know why.`,
                    userId: 6,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "Why is Hoon so mean to you?",
                    content: `Hoon is so mean to me. I don't know why.`,
                    userId: 6,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "Why is Hoon so mean to you?",
                    content: `Hoon is so mean to me. I don't know why.`,
                    userId: 6,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "Why is Hoon so mean to you?",
                    content: `Hoon is so mean to me. I don't know why.`,
                    userId: 6,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "Why is Hoon so mean to you?",
                    content: `Hoon is so mean to me. I don't know why.`,
                    userId: 6,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "Why is Hoon so mean to you?",
                    content: `Hoon is so mean to me. I don't know why.`,
                    userId: 6,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "Why is Hoon so mean to you?",
                    content: `Hoon is so mean to me. I don't know why.`,
                    userId: 6,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "Why is Hoon so mean to you?",
                    content: `Hoon is so mean to me. I don't know why.`,
                    userId: 6,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "Why is Hoon so mean to you?",
                    content: `Hoon is so mean to me. I don't know why.`,
                    userId: 6,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "Why is Hoon so mean to you?",
                    content: `Hoon is so mean to me. I don't know why.`,
                    userId: 6,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "Why is Hoon so mean to you?",
                    content: `Hoon is so mean to me. I don't know why.`,
                    userId: 6,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "Why is Hoon so mean to you?",
                    content: `Hoon is so mean to me. I don't know why.`,
                    userId: 6,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "Why is Hoon so mean to you?",
                    content: `Hoon is so mean to me. I don't know why.`,
                    userId: 6,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "Why is Hoon so mean to you?",
                    content: `Hoon is so mean to me. I don't know why.`,
                    userId: 6,
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
        return queryInterface.bulkDelete("Questions", null, {});
    },
};
