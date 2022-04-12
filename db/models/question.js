"use strict";
module.exports = (sequelize, DataTypes) => {
    const Question = sequelize.define(
        "Question",
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
            title: {
                allowNull: false,
                type: DataTypes.STRING(100),
            },
            userId: {
                allowNull: false,
                type: DataTypes.INTEGER,
                references: { model: "Users" },
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
    Question.associate = function (models) {
        // associations can be defined here
        Question.belongsTo(models.User, { foreignKey: "userId" });
        Question.hasMany(models.Answer, { foreignKey: "questionId" });
        Question.hasMany(models.Comment, { foreignKey: "questionId" });
        Question.hasMany(models.QuestionVote, { foreignKey: "questionId" });

        Question.belongsToMany(models.User, {
            through: "QuestionVote",
            otherKey: "userId",
            foreignKey: "questionId",
        });
    };
    return Question;
};
