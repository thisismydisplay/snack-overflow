"use strict";
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
        "User",
        {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            username: {
                allowNull: false,
                type: DataTypes.STRING(25),
                unique: true,
            },
            hashedPassword: {
              allowNull: false,
              type: DataTypes.STRING.BINARY
            },
            email: {
                allowNull: false,
                unique: true,
                type: DataTypes.STRING(100),
            },
            createdAt: {
                allowNull: false,
                type: DataTypes.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: DataTypes.DATE,
            },
        },
        {}
    );
    User.associate = function (models) {
        // associations can be defined here
        User.hasMany(models.Question, { foreignKey: "userId" });
        User.hasMany(models.Answer, { foreignKey: "userId" });
        User.hasMany(models.Comment, { foreignKey: "userId" });

        User.belongsToMany(models.Question, {
          through: "QuestionVote",
          otherKey: "questionId",
          foreignKey: "userId",
      });
        User.belongsToMany(models.Answer, {
          through: "AnswerVote",
          otherKey: "answerId",
          foreignKey: "userId",
      });

        User.belongsToMany(models.Comment, {
            through: "CommentVote",
            otherKey: "commentId",
            foreignKey: "userId",
        });

    };
    return User;
};
