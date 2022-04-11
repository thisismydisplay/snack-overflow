'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      username: {
        allowNull: false,
        type: DataTypes.STRING(25)
      },
      email: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING(100)
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
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
