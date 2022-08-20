'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Video extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Video.hasMany(models.Comment, {
        foreignKey: 'commentable_id',
        constraints: false,
        scope: { commentable_type: 'video' }
      });
    }
  }
  Video.init({
    id: { primaryKey: true, type: DataTypes.INTEGER },
    name: DataTypes.STRING,
    content: DataTypes.STRING
  }, {
    sequelize,
    tableName: 'videos',
  });
  return Video;
};
