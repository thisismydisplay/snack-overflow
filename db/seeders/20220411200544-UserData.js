'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Users', [
    {
      username: 'Ara',
      hashedPassword: 'password',
      email: 'ara@ara.com',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      username: 'Haywood',
      hashedPassword: 'password',
      email: 'haywood@haywood.com',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      username: 'Leo',
      hashedPassword: 'password',
      email: 'leo@leo.com',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      username: 'Mark',
      hashedPassword: 'password',
      email: 'mark@mark.com',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      username: 'Demo',
      hashedPassword: 'password',
      email: 'demo@demo.com',
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
   return queryInterface.bulkDelete('Users', null, {});
  }
};
