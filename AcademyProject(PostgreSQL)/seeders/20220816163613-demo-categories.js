'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('categories', [
      {
        name: 'junior',
        description: 'junior description',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'middle',
        description: 'middle description',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'senior',
        description: 'senior description',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      ]
    );
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('categories', null, {});
  }
};
