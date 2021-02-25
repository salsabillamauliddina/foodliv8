'use strict';
const fs = require('fs');
const fsPromises = require('fs/promises');

module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
      return new Promise((resolve, reject) => {
        fsPromises.readFile('./data/users.json', 'utf-8')
        .then(data => {
          data = JSON.parse(data);
          data.forEach(el => {
            el.createdAt = new Date();
            el.updatedAt = new Date();
          });
          return data;
        })
        .then(dataModified => {
          resolve(queryInterface.bulkInsert('Users', dataModified, {}))
        })
        .catch(err => {
          reject(err)
        })

      })


  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Users', null, {})
  }
};
