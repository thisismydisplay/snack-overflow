"use strict";
module.exports = (sequelize, DataTypes) => {
    const CommentVote = sequelize.define(
        "CommentVote", {
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
            commentId: {
                allowNull: false,
                type: DataTypes.INTEGER,
                references: { model: "Comments" },
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
    CommentVote.associate = function(models) {
        CommentVote.belongsTo(models.User, { foreignKey: "userId" });
        CommentVote.belongsTo(models.Comment, { foreignKey: "commentId" });
    };
    return CommentVote;
};