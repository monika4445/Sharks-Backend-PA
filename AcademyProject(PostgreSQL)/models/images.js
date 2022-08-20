'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Image.hasMany(models.Comment, {
        foreignKey: 'commentable_id',
        constraints: false,
        scope: {
          commentable_type: 'image'
        }
      });
    }
  }
  Image.init({
    id: { primaryKey: true, type: DataTypes.INTEGER },
    name: DataTypes.STRING,
    content: DataTypes.STRING
  }, {
    sequelize,
    tableName: 'images',
  });
  return Image;
};
