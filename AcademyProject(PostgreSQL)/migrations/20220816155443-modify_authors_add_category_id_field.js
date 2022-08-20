'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(
        'authors',
        'category_id',
        {
          type: Sequelize.INTEGER,
          allowNull: true,
        }
    );
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.removeColumn('authors', 'category_id');
  }
};
