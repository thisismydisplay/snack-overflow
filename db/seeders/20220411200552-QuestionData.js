"use strict";
const randomDate = require("../../public/javascripts/randomDate");


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
                    createdAt: randomDate(new Date(2018, 0, 1), new Date(2022, 2, 30)),
                    updatedAt: randomDate(new Date(2022, 3, 1), new Date()),
                },
                {
                    title: "What is the best type of coffee chocolate?",
                    content: "Hey coffee lovers!  What is the best type of coffee chocolate?",
                    userId: 2,
                    createdAt: randomDate(new Date(2018, 0, 1), new Date(2022, 2, 30)),
                    updatedAt: randomDate(new Date(2022, 3, 1), new Date()),
                },
                {
                    title: "What's good wine for a beginner?",
                    content: "HEYO WINERSSS!! What's good wine for a beginner? Looking for something sweet and not too tangy.",
                    userId: 3,
                    createdAt: randomDate(new Date(2018, 0, 1), new Date(2022, 2, 30)),
                    updatedAt: randomDate(new Date(2022, 3, 1), new Date()),
                },
                {
                    title: "Recommend me some good food. Anything. Go for it.",
                    content: "I'm looking to try new food! What are some good recipes to try?",
                    userId: 5,
                    createdAt: randomDate(new Date(2018, 0, 1), new Date(2022, 2, 30)),
                    updatedAt: randomDate(new Date(2022, 3, 1), new Date()),
                },
                {
                    title: "Is Chinese food really tasty?",
                    content: `Leo won't shut up about it and I'm getting really annoyed. Please tell me!!`,
                    userId: 41,
                    createdAt: randomDate(new Date(2018, 0, 1), new Date(2022, 2, 30)),
                    updatedAt: randomDate(new Date(2022, 3, 1), new Date()),
                },
                {
                    title: 'How do I make a chicken sandwich?',
                    content: `I'm trying to make a chicken sandwich but I can't figure out how to do it. Please help!`,
                    userId: 21,
                    createdAt: randomDate(new Date(2018, 0, 1), new Date(2022, 2, 30)),
                    updatedAt: randomDate(new Date(2022, 3, 1), new Date()),
                },
                {
                    title: "Joon threw away my quesadilla. Said he prefers bibimbap with sauteed gochujang.",
                    content: `How do I make poison?`,
                    userId: 4,
                    createdAt: randomDate(new Date(2018, 0, 1), new Date(2022, 2, 30)),
                    updatedAt: randomDate(new Date(2022, 3, 1), new Date()),
                },
                {
                    title: "Are there any good Nigerian restaurants in the San Francisco area?",
                    content: `I'm looking to go try out new food!`,
                    userId: 65,
                    createdAt: new Date("December 16, 2021 13:06:24"),
                    updatedAt: randomDate(new Date(2022, 0, 1), new Date()),
                },
                {
                    title: "I'm looking to take my bear to a good restaurant.",
                    content: ` Any suggestions?`,
                    userId: 48,
                    createdAt: new Date("December 16, 2021 13:06:24"),
                    updatedAt: new Date("December 17, 2021 22:24"),
                },
                {
                    title: "Where can I try memails?",
                    content: `Title. Read it.`,
                    userId: 17,
                    createdAt: randomDate(new Date(2018, 0, 1), new Date(2022, 2, 30)),
                    updatedAt: randomDate(new Date(2022, 3, 1), new Date()),
                },
                {
                    title: "Recommend me some good tea. Thanks",
                    content: `I've been craving some nice sweet tea recently. Any recommendations?`,
                    userId: 46,
                    createdAt: new Date("March 31, 2022 19:52:36"),
                    updatedAt: randomDate(new Date(2022, 3, 1), new Date()),
                },
                {
                    title: "Has anyone eaten fried mice before? Asking for a friend",
                    content: `Title. Go on. Read it.`,
                    userId: 22,
                    createdAt: randomDate(new Date(2018, 0, 1), new Date(2022, 2, 30)),
                    updatedAt: randomDate(new Date(2022, 3, 1), new Date()),
                },
                {
                    title: "Want to go out to eat with someone. Anyone interested??",
                    content: `I'm feeling lonely so just wanted to see if anyone is interested in some dinner in the SF area. ????`,
                    userId: 4,
                    createdAt: new Date("December 17, 2021 22:24"),
                    updatedAt: randomDate(new Date(2022, 3, 1), new Date()),
                },
                {
                    title: "Looking for a good sushi place around the HQ of evil blue company",
                    content: `Any one know where I can get some nice authentic Korean kimbap or Japanese sushi? Thanks in advance!`,
                    userId: 39,
                    createdAt: new Date("March 31, 2022 16:52:36"),
                    updatedAt: randomDate(new Date(2022, 3, 1), new Date()),
                },
                {
                    title: "Anyone know where I could find some nice Tetris-themed restaurants?",
                    content: `I've been craving some good Tetris-themed food recently. Any recommendations?`,
                    userId: 51,
                    createdAt: randomDate(new Date(2018, 0, 1), new Date(2022, 2, 30)),
                    updatedAt: randomDate(new Date(2022, 3, 1), new Date()),
                },
                {
                    title: "Anyone know how to make unseasoned chili?",
                    content: `I want to make chili for my kids birthday as they're a recovering salt addict. Please help me find the least sodium filled chili possible.`,
                    userId: 74,
                    createdAt: randomDate(new Date(2018, 0, 1), new Date(2022, 2, 30)),
                    updatedAt: randomDate(new Date(2022, 3, 1), new Date()),
                },
                {
                    title: "Thoughts on Potbelly's chicken salad sandwich?",
                    content: `I really like there sandwich. Curious to know what others think!`,
                    userId: 56,
                    createdAt: randomDate(new Date(2018, 0, 1), new Date(2022, 2, 30)),
                    updatedAt: randomDate(new Date(2022, 3, 1), new Date()),
                },
                {
                    title: "Anyone know any good recipes for making a delicious, but not too fatty, pizza?",
                    content: `I'm on a diet so make the pizza as healthy as possible please. Thank you.`,
                    userId: 62,
                    createdAt: randomDate(new Date(2018, 0, 1), new Date(2022, 2, 30)),
                    updatedAt: randomDate(new Date(2022, 3, 1), new Date()),
                },
                {
                    title: "How much salt should I be eating per day?",
                    content: `I'm wondering if my usual salt intake is good enough.`,
                    userId: 63,
                    createdAt: randomDate(new Date(2018, 0, 1), new Date(2022, 2, 30)),
                    updatedAt: randomDate(new Date(2022, 3, 1), new Date()),
                },
                {
                    title: "Anyone know how to make oreos?",
                    content: `I really want to make oreos!!!`,
                    userId: 69,
                    createdAt: randomDate(new Date(2018, 0, 1), new Date(2022, 2, 30)),
                    updatedAt: randomDate(new Date(2022, 3, 1), new Date()),
                }
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
