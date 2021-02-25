'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Favourite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Favourite.belongsTo(models.User)
      Favourite.belongsTo(models.Food)
    }
  };
  Favourite.init({
    UserId: DataTypes.INTEGER,
    FoodId: DataTypes.INTEGER,
    favoriteListName: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          args : true,
          msg : "The Story must be told"
        }
      }
    },
    listDescription: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          args : true,
          msg : "Please tell us detail of your story"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Favourite',
  });
  return Favourite;
};