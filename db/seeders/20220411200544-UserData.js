"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
        return queryInterface.bulkInsert("Users", [
            {
                username: "Ara",
                hashedPassword:
                    "$2a$10$X0XHMhJtLCWDL9e0eYa2YOuPAz5YrEaeLcd3rdbubtU6MopUWBGa2",
                email: "ara@ara.com",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                username: "Haywood",
                hashedPassword:
                    "$2a$10$X0XHMhJtLCWDL9e0eYa2YOuPAz5YrEaeLcd3rdbubtU6MopUWBGa2",
                email: "haywood@haywood.com",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                username: "Leo",
                hashedPassword:
                    "$2a$10$X0XHMhJtLCWDL9e0eYa2YOuPAz5YrEaeLcd3rdbubtU6MopUWBGa2",
                email: "leo@leo.com",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                username: "Mark",
                hashedPassword:
                    "$2a$10$X0XHMhJtLCWDL9e0eYa2YOuPAz5YrEaeLcd3rdbubtU6MopUWBGa2",
                email: "mark@mark.com",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                username: "Demo",
                hashedPassword:
                    "$2a$10$X0XHMhJtLCWDL9e0eYa2YOuPAz5YrEaeLcd3rdbubtU6MopUWBGa2",
                email: "demo@demo.com",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    down: (queryInterface, Sequelize) => {
        /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
        return queryInterface.bulkDelete("Users", null, {});
    },
};
