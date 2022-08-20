'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('authors', [
      {
        name: 'Johny',
        surname: 'Depp',
        age: 39,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Jon',
        surname: 'Resig',
        age: 45,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'David',
        surname: 'Flanagan',
        age: 49,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'John',
        surname: 'Bentley',
        age: 45,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Robert',
        surname: 'Love',
        age: 45,
        createdAt: new Date(),
        updatedAt: new Date()
      }]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
