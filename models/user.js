'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsToMany(models.Food, {
        through : models.Favourite
      })
      User.hasMany(models.Favourite)
    }
  };
  User.init({
    first_name: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          args : true,
          msg : "First name can't be empty"
        }
      }
    },
    last_name: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          args : true,
          msg : "Last name can't be empty"
        }
      }
    },
    username: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          args : true,
          msg : "Username name can't be empty"
        }
      }
    },
    password: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          args : true,
          msg : "Password can't be empty"
        }
      }
    },
    email: {
      type : DataTypes.STRING,
      validate : {
        isEmail : {
          args : false,
          msg : "Only allow email format"
        }
      }
    },
    birth_date: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          args : true,
          msg : "Birth date can't be empty"
        }
      }
    },
    gender: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          args : true,
          msg : "Gender can't be empty"
        }
      }
    },
    user_location: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          args : true,
          msg : "Location can't be empty"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};