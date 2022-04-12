"use strict";
module.exports = (sequelize, DataTypes) => {
    const AnswerVote = sequelize.define(
        "AnswerVote",
        {
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
            answerId: {
                allowNull: false,
                type: DataTypes.INTEGER,
                references: { model: "Answers" },
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
        },
        {}
    );
    AnswerVote.associate = function (models) {
        AnswerVote.belongsTo(models.User, { foreignKey: "userId" });
        AnswerVote.belongsTo(models.Answer, { foreignKey: "answerId" });
    };
    return AnswerVote;
};
