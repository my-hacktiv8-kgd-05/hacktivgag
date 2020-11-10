'use strict';

const data = require('../json/categories.json')

data.forEach( category => {
  category.createdAt = new Date()
  category.updatedAt = new Date()
})

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categories', data, {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Categories', null, {})
  }
};
