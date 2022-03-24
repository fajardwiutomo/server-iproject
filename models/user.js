'use strict';
const {
  Model
} = require('sequelize');
const {hashPass} = require('../helpers/bcrypt')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    email:  {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {msg: "Email can't empty"},
        notNull: {msg: "Email can't empty"},
        isEmail: {msg: "wrong format, must email"}
      },
      unique: { msg: "Email must unique"}
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {msg: "password cannot empty"},
        notNull: {msg: "password cannot empty"}
      }
    },
    role:{
      type: DataTypes.STRING,
      defaultValue: 'Admin'
    } 
  }, {
    sequelize,
    hooks: {
      beforeCreate(User){
        User.password = hashPass(User.password)
      }
    },
    modelName: 'User',
  });
  return User;
};