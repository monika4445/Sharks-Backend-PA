'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('book_authors', [
      {
        book_id: 1,
        author_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        book_id: 19,
        author_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        book_id: 20,
        author_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        book_id: 5,
        author_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        book_id: 5,
        author_id: 7,
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
