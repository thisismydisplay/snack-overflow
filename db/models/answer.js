"use strict";
module.exports = (sequelize, DataTypes) => {
    const Answer = sequelize.define(
        "Answer",
        {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            content: {
                allowNull: false,
                type: DataTypes.TEXT,
            },
            userId: {
                allowNull: false,
                type: DataTypes.INTEGER,
                references: { model: "Users" },
            },
            questionId: {
                allowNull: false,
                type: DataTypes.INTEGER,
                references: { model: "Questions" },
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
    Answer.associate = function (models) {
        // associations can be defined here
        Answer.belongsTo(models.User, { foreignKey: "userId" });
        Answer.belongsTo(models.Question, { foreignKey: "questionId" });
        Answer.hasMany(models.Comment, { foreignKey: "answerId" });
        Answer.hasMany(models.AnswerVote, { foreignKey: "answerId" });

        Answer.belongsToMany(models.User, {
            through: "AnswerVote",
            otherKey: "userId",
            foreignKey: "answerId",
        });
    };
    return Answer;
};
