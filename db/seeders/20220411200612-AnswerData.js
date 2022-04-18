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
                    content: "Two-buck Chuck from trader joes!",
                    userId: 4,
                    questionId: 3,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    content: "Could you be more specific with your question?",
                    userId: 11,
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
                    userId: 47,
                    questionId: 9,
                    createdAt: new Date("December 17, 2021 03:24:00"),
                    updatedAt: new Date()
                },
                {
                    content: `Even cake?`,
                    userId: 50,
                    questionId: 9,
                    createdAt: new Date("December 17, 2021 04:34:00"),
                    updatedAt: new Date(),
                },
                {
                    content: `Especially cake?`,
                    userId: 47,
                    questionId: 9,
                    createdAt: new Date("December 17, 2021 05:24:00"),
                    updatedAt: new Date(),
                },
                {
                    content: `Based.`,
                    userId: 49,
                    questionId: 9,
                    createdAt: new Date("December 17, 2021 06:57:00"),
                    updatedAt: new Date(),
                },
                {
                    content: `Have you tried the Jamaican Cerasee? It's SOOO good!! My family makes them SO good too!`,
                    userId: 11,
                    questionId: 11,
                    createdAt: new Date("April 1, 2022 22:57:00"),
                    updatedAt: new Date(),
                },
                {
                    content: `Yes. Tastes like honey fried chicken but tastier. Go ahead and buy some. You'll love it. 😇`,
                    userId: 4,
                    questionId: 12,
                    createdAt: new Date("February 2, 2022 06:57:00"),
                    updatedAt: new Date(),
                },
                {
                    content: `Have you tried reduce?`,
                    userId: 18,
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
                    content: `In Korea, for sure.`,
                    userId: 41,
                    questionId: 14,
                    createdAt: new Date("February 2, 2022 12:57:28"),
                    updatedAt: new Date(),
                },
                {
                    content: `There's a restaurant around there that does absolutely amazing congee. I think it's around the corner from you, OP. If you're lucky they'll have what you're looking for too!`,
                    userId: 25,
                    questionId: 14,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    content: `Wha...What does this even mean?`,
                    userId: 19,
                    questionId: 15,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    content: `Do you mean like cake in Tetris-design style?`,
                    userId: 44,
                    questionId: 15,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    content: `Unseasoned chili? I'm not sure. Could you not just make chili without adding any seasoning? Like, no salt and stuff? Sorry to hear about your kids condition though. I have a pet dolphin that suffers from the same rare debilitating condition.`,
                    userId: 78,
                    questionId: 16,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    content: `Please don't ask any simple questions. Just don't season it.`,
                    userId: 80,
                    questionId: 16,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    content: `I stopped in at Potbelly while traveling through town. The line was a little long at lunchtime but it moved fast. A person comes around and takes your order while you are in line so it will be ready when you get up to the register. The staff was very friendly and talkative. I ordered a large chicken salad sandwich. It was absolutely incredible. It's been a week and I am still raving about it. It was about $10 for a big sandwich, large soda and chips. Indoor and outdoor seating was a plus too, especially since it's right on the harbor and you can watch all the people walking by. To top it off, they have PB&J available, an option many restaurants don't have!

                    Can't wait to go back!`,
                    userId: 68,
                    questionId: 17,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    content: `Unremarkable - nothing special - real let down. Had chicken salad sandwhich - meh boring!!! Husband had Mediterranean - he said it was ok so that's why it got one point. Won't be back. Choices limited - over priced`,
                    userId: 58,
                    questionId: 17,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    content: `I call this recipe the smoked-pizza-fatty. Very healthy. Trust me. 1. Mix the Italian sausage meat with the sliced green olives. Roll the meat mixture into a 10 x 10 inch square. Roll in a large freezer bag or on parchment paper so the meat will roll into the fatty easily.
                    2.   Lay the pepperoni slices in the middle of the sausage meat. Sprinkle the grated mozzarella on the pepperoni.
                    3.   Roll up the fatty so that the cheese and pepperoni is completely surrounded by the sausage mixture. Place the fatty on a smoker rack.
                    4.   Set your Bradley to 250 F. Smoke the fatty for about 2 1/2 hours. Remove when the internal temperature is at 165 F.
                    5.   If desired, serve with pizza sauce.`,
                    userId: 73,
                    questionId: 18,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    content: `Because the average American eats so much excess sodium, even cutting back by 1,000 milligrams a day can significantly improve blood pressure and heart health. And remember, more than 70 percent of the sodium Americans eat comes from packaged, prepared and restaurant foods — not the salt shaker.`,
                    userId: 74,
                    questionId: 19,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    content: `Please don't ask easily googled questions.`,
                    userId: 53,
                    questionId: 19,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    content: `I'm not sure. Posting this comment to follow the thread!!`,
                    userId: 54,
                    questionId: 19,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    content: `Coffee chocolate deserves to be thrown in the gulag`,
                    userId: 7,
                    questionId: 2,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    content: `Definitely try Peru 75% Dark Chocolate Craft Bar.`,
                    userId: 9,
                    questionId: 2,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    content: `Try Sam's Choice wine. They're pretty beginning.`,
                    userId: 35,
                    questionId: 2,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    content: `Try some injera. It's going to be one of the best things you've ever had.`,
                    userId: 7,
                    questionId: 4,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    content: `Maybe some nice chicken tomato soup?`,
                    userId: 29,
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
