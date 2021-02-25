'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Favourites', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      UserId: {
        type: Sequelize.INTEGER,
        references : {
          model : 'Users',
          target : 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      },
      FoodId: {
        type: Sequelize.INTEGER,
        references : {
          model : 'Food',
          target : 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      },
      favoriteListName: {
        type: Sequelize.STRING
      },
      listDescription: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Favourites');
  }
};