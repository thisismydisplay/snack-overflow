"use strict";
module.exports = (sequelize, DataTypes) => {
    const QuestionVote = sequelize.define(
        "QuestionVote", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
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
            isUpvote: {
                allowNull: false,
                type: DataTypes.BOOLEAN,
            },
            createdAt: {
                allowNull: false,
                type: DataTypes.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: DataTypes.DATE,
            },
        }, {}
    );
    QuestionVote.associate = function(models) {
        QuestionVote.belongsTo(models.User, { foreignKey: "userId" });
        QuestionVote.belongsTo(models.Question, { foreignKey: "questionId" });
    };
    return QuestionVote;
};