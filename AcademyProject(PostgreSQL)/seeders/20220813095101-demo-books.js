'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('books', [
      {
        name: 'Johny',
        category: 'Adventure',
        description: 'hey2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Angy',
        category: 'Adventure',
        description: 'hey2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'John',
        category: 'Adventure',
        description: 'hey2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'John1',
        category: 'Adventure',
        description: 'hey2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Johny',
        category: 'Adventure',
        description: 'hey2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Angy',
        category: 'Adventure',
        description: 'hey2',
        createdAt: new Date(),
        updatedAt: new Date()
      }]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('books', null, {});
  }
};
