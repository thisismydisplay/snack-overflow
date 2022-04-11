'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      content: {
        allowNull: false,
        type: DataTypes.TEXT
      },
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: { model: "Users"}
      },
      questionId: {
        type: DataTypes.INTEGER,
        references: { model: "Questions"}
      },
      answerId: {
        type: DataTypes.INTEGER,
        references: { model: "Answers"}
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
  }, {});
  Comment.associate = function(models) {
    // associations can be defined here
  };
  return Comment;
};
