'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Author extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Author.belongsTo(models.Category, {
        foreignKey: 'category_id'
      });
      Author.belongsToMany(models.Book, {
        through: models.BookAuthor,
        foreignKey: 'author_id',
        as: 'books'
      })
    }
  }
  Author.init({
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    age: DataTypes.INTEGER,
    categoryId: {
      type: DataTypes.INTEGER,
      field: 'category_id'
    },
  }, {
    hooks: {

    },
    sequelize,
    tableName: 'authors',
  });
  return Author;
};
