'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('CommentVotes', [{
    userId: 1,
    commentId: 2,
    isUpvote: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
   userId: 2,
   commentId: 1,
   isUpvote: true,
   createdAt: new Date(),
   updatedAt: new Date()
 },
 {
   userId: 4,
   commentId: 2,
   isUpvote: true,
   createdAt: new Date(),
   updatedAt: new Date()
 },
 {
   userId: 3,
   commentId: 2,
   isUpvote: false,
   createdAt: new Date(),
   updatedAt: new Date()
 }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('CommentVotes', null, {});
  }
};
