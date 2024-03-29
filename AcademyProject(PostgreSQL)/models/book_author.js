'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BookAuthor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  BookAuthor.init({
    book_id: DataTypes.INTEGER,
    author_id: DataTypes.INTEGER
  }, {
    sequelize,
    tableName: 'book_authors',
  });
  return BookAuthor;
};
