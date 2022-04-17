"use strict";
const usersJson = require("../../demo-seedUsers/userDatabase.json");



const results = [];

usersJson.forEach((ele) => {
    results.push({
        email: ele.email,
        username: ele.username,
        hashedPassword: ele.password,
        createdAt: new Date(),
        updatedAt: new Date(),
    });
})

module.exports = {
    up: (queryInterface, Sequelize) => {
        /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
        return queryInterface.bulkInsert("Users", [
            {
                username: "Demo-User",
                hashedPassword:
                    "$2a$10$X0XHMhJtLCWDL9e0eYa2YOuPAz5YrEaeLcd3rdbubtU6MopUWBGa2",
                email: "demo@demo.com",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
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
                username: "Agustin",
                hashedPassword:
                    "$2a$10$X0XHMhJtLCWDL9e0eYa2YOuPAz5YrEaeLcd3rdbubtU6MopUWBGa2",
                email: "agustin@agustin.com",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                username: "Badri",
                hashedPassword:
                    "$2a$10$X0XHMhJtLCWDL9e0eYa2YOuPAz5YrEaeLcd3rdbubtU6MopUWBGa2",
                email: "badri@badri.com",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                username: "Andrew",
                hashedPassword:
                    "$2a$10$X0XHMhJtLCWDL9e0eYa2YOuPAz5YrEaeLcd3rdbubtU6MopUWBGa2",
                email: "andrew@andrew.com",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                username: "Anthony B",
                hashedPassword:
                    "$2a$10$X0XHMhJtLCWDL9e0eYa2YOuPAz5YrEaeLcd3rdbubtU6MopUWBGa2",
                email: "anthony@bronca.com",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                username: "Anthony L",
                hashedPassword:
                    "$2a$10$X0XHMhJtLCWDL9e0eYa2YOuPAz5YrEaeLcd3rdbubtU6MopUWBGa2",
                email: "anthony@lovern.com",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                username: "Attiya",
                hashedPassword:
                    "$2a$10$X0XHMhJtLCWDL9e0eYa2YOuPAz5YrEaeLcd3rdbubtU6MopUWBGa2",
                email: "Attiya@Attiya.com",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                username: "Austin",
                hashedPassword:
                    "$2a$10$X0XHMhJtLCWDL9e0eYa2YOuPAz5YrEaeLcd3rdbubtU6MopUWBGa2",
                email: "austin@austin.com",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                username: "Beau",
                hashedPassword:
                    "$2a$10$X0XHMhJtLCWDL9e0eYa2YOuPAz5YrEaeLcd3rdbubtU6MopUWBGa2",
                email: "beau@beau.com",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                username: "Brendan",
                hashedPassword:
                    "$2a$10$X0XHMhJtLCWDL9e0eYa2YOuPAz5YrEaeLcd3rdbubtU6MopUWBGa2",
                email: "brendan@brendan.com",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                username: "Brian",
                hashedPassword:
                    "$2a$10$X0XHMhJtLCWDL9e0eYa2YOuPAz5YrEaeLcd3rdbubtU6MopUWBGa2",
                email: "brian@brian.com",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                username: "Celeste",
                hashedPassword:
                    "$2a$10$X0XHMhJtLCWDL9e0eYa2YOuPAz5YrEaeLcd3rdbubtU6MopUWBGa2",
                email: "celeste@celeste.com",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                username: "Chris",
                hashedPassword:
                    "$2a$10$X0XHMhJtLCWDL9e0eYa2YOuPAz5YrEaeLcd3rdbubtU6MopUWBGa2",
                email: "chris@chris.com",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                username: "Darren",
                hashedPassword:
                    "$2a$10$X0XHMhJtLCWDL9e0eYa2YOuPAz5YrEaeLcd3rdbubtU6MopUWBGa2",
                email: "darren@darren.com",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                username: "David",
                hashedPassword:
                    "$2a$10$X0XHMhJtLCWDL9e0eYa2YOuPAz5YrEaeLcd3rdbubtU6MopUWBGa2",
                email: "david@david.com",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                username: "Dayton",
                hashedPassword:
                    "$2a$10$X0XHMhJtLCWDL9e0eYa2YOuPAz5YrEaeLcd3rdbubtU6MopUWBGa2",
                email: "ayton@ayton.com",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                username: "Dominic",
                hashedPassword:
                    "$2a$10$X0XHMhJtLCWDL9e0eYa2YOuPAz5YrEaeLcd3rdbubtU6MopUWBGa2",
                email: "dominic@dominic.com",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                username: "Elan",
                hashedPassword:
                    "$2a$10$X0XHMhJtLCWDL9e0eYa2YOuPAz5YrEaeLcd3rdbubtU6MopUWBGa2",
                email: "elan@elan.com",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                username: "Ethan",
                hashedPassword:
                    "$2a$10$X0XHMhJtLCWDL9e0eYa2YOuPAz5YrEaeLcd3rdbubtU6MopUWBGa2",
                email: "ethan@ethan.com",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                username: "Fang",
                hashedPassword:
                    "$2a$10$X0XHMhJtLCWDL9e0eYa2YOuPAz5YrEaeLcd3rdbubtU6MopUWBGa2",
                email: "fang@fang.com",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                username: "Frances",
                hashedPassword:
                    "$2a$10$X0XHMhJtLCWDL9e0eYa2YOuPAz5YrEaeLcd3rdbubtU6MopUWBGa2",
                email: "frances@frances.com",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                username: "Bella",
                hashedPassword:
                    "$2a$10$X0XHMhJtLCWDL9e0eYa2YOuPAz5YrEaeLcd3rdbubtU6MopUWBGa2",
                email: "bella@bella.com",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                username: "Jae",
                hashedPassword:
                    "$2a$10$X0XHMhJtLCWDL9e0eYa2YOuPAz5YrEaeLcd3rdbubtU6MopUWBGa2",
                email: "Jae@Jae.com",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                username: "Jingling",
                hashedPassword:
                    "$2a$10$X0XHMhJtLCWDL9e0eYa2YOuPAz5YrEaeLcd3rdbubtU6MopUWBGa2",
                email: "jingling@jingling.com",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                username: "Abhishek",
                hashedPassword:
                    "$2a$10$X0XHMhJtLCWDL9e0eYa2YOuPAz5YrEaeLcd3rdbubtU6MopUWBGa2",
                email: "abhishek@abhishek.com",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                username: "Jon",
                hashedPassword:
                    "$2a$10$X0XHMhJtLCWDL9e0eYa2YOuPAz5YrEaeLcd3rdbubtU6MopUWBGa2",
                email: "jon@jon.com",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                username: "Jonathon",
                hashedPassword:
                    "$2a$10$X0XHMhJtLCWDL9e0eYa2YOuPAz5YrEaeLcd3rdbubtU6MopUWBGa2",
                email: "jonathon@jonathon.com",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                username: "Jose",
                hashedPassword:
                    "$2a$10$X0XHMhJtLCWDL9e0eYa2YOuPAz5YrEaeLcd3rdbubtU6MopUWBGa2",
                email: "jose@jose.com",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                username: "Josh",
                hashedPassword:
                    "$2a$10$X0XHMhJtLCWDL9e0eYa2YOuPAz5YrEaeLcd3rdbubtU6MopUWBGa2",
                email: "josh@josh.com",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                username: "Kevin",
                hashedPassword:
                    "$2a$10$X0XHMhJtLCWDL9e0eYa2YOuPAz5YrEaeLcd3rdbubtU6MopUWBGa2",
                email: "Kevin@Kevin.com",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                username: "Krishna",
                hashedPassword:
                    "$2a$10$X0XHMhJtLCWDL9e0eYa2YOuPAz5YrEaeLcd3rdbubtU6MopUWBGa2",
                email: "krishna@krishna.com",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                username: "Lincoln",
                hashedPassword:
                    "$2a$10$X0XHMhJtLCWDL9e0eYa2YOuPAz5YrEaeLcd3rdbubtU6MopUWBGa2",
                email: "lincoln@lincoln.com",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                username: "Maica",
                hashedPassword:
                    "$2a$10$X0XHMhJtLCWDL9e0eYa2YOuPAz5YrEaeLcd3rdbubtU6MopUWBGa2",
                email: "maica@maica.com",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                username: "Paul",
                hashedPassword:
                    "$2a$10$X0XHMhJtLCWDL9e0eYa2YOuPAz5YrEaeLcd3rdbubtU6MopUWBGa2",
                email: "paul@paul.com",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                username: "Kai",
                hashedPassword:
                    "$2a$10$X0XHMhJtLCWDL9e0eYa2YOuPAz5YrEaeLcd3rdbubtU6MopUWBGa2",
                email: "kai@kai.com",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                username: "Sam",
                hashedPassword:
                    "$2a$10$X0XHMhJtLCWDL9e0eYa2YOuPAz5YrEaeLcd3rdbubtU6MopUWBGa2",
                email: "sam@sam.com",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                username: "Joon",
                hashedPassword:
                    "$2a$10$X0XHMhJtLCWDL9e0eYa2YOuPAz5YrEaeLcd3rdbubtU6MopUWBGa2",
                email: "joon@joon.com",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                username: "Lana",
                hashedPassword:
                    "$2a$10$X0XHMhJtLCWDL9e0eYa2YOuPAz5YrEaeLcd3rdbubtU6MopUWBGa2",
                email: "lana@lana.com",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                username: "Vee",
                hashedPassword:
                    "$2a$10$X0XHMhJtLCWDL9e0eYa2YOuPAz5YrEaeLcd3rdbubtU6MopUWBGa2",
                email: "vee@vee.com",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                username: "Vernyoon",
                hashedPassword:
                    "$2a$10$X0XHMhJtLCWDL9e0eYa2YOuPAz5YrEaeLcd3rdbubtU6MopUWBGa2",
                email: "vernyoon@vernyoon.com",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                username: "Xiaowen",
                hashedPassword:
                    "$2a$10$X0XHMhJtLCWDL9e0eYa2YOuPAz5YrEaeLcd3rdbubtU6MopUWBGa2",
                email: "xiowen@xiowen.com",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                username: "Briana",
                hashedPassword:
                    "$2a$10$X0XHMhJtLCWDL9e0eYa2YOuPAz5YrEaeLcd3rdbubtU6MopUWBGa2",
                email: "briana@briana.com",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                username: "Raymond",
                hashedPassword:
                    "$2a$10$X0XHMhJtLCWDL9e0eYa2YOuPAz5YrEaeLcd3rdbubtU6MopUWBGa2",
                email: "raymond@raymond.com",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                username: "Alec",
                hashedPassword:
                    "$2a$10$X0XHMhJtLCWDL9e0eYa2YOuPAz5YrEaeLcd3rdbubtU6MopUWBGa2",
                email: "alec@alec.com",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                username: "Rawaha",
                hashedPassword:
                    "$2a$10$X0XHMhJtLCWDL9e0eYa2YOuPAz5YrEaeLcd3rdbubtU6MopUWBGa2",
                email: "rawaha@rawaha.com",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                username: "Daniel",
                hashedPassword:
                    "$2a$10$X0XHMhJtLCWDL9e0eYa2YOuPAz5YrEaeLcd3rdbubtU6MopUWBGa2",
                email: "daniel@daniel.com",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                username: "Ryan",
                hashedPassword:
                    "$2a$10$X0XHMhJtLCWDL9e0eYa2YOuPAz5YrEaeLcd3rdbubtU6MopUWBGa2",
                email: "ryan@ryan.com",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            ...results,
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
