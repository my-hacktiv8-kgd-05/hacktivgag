'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Memes', 'CategoryId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Categories',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Memes', 'CategoryId')
  }
};
