'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    getCommentable(options) {
      if (!this.commentable_type) return Promise.resolve(null);
      const mixinMethodName = `get${uppercaseFirst(this.commentable_type)}`;
      return this[mixinMethodName](options);
    }

    static associate(models) {
      Comment.belongsTo(models.Image, {
        foreignKey: 'commentable_id',
        constraints: false
      });
      Comment.belongsTo(models.Video, {
        foreignKey: 'commentable_id',
        constraints: false
      });
    }
  }
  Comment.init({
    id: { primaryKey: true, type: DataTypes.INTEGER },
    comment: DataTypes.STRING,
    commentable_type: DataTypes.STRING,
    commentable_id: DataTypes.NUMBER
  }, {
    hooks: {
      afterFind: (findResult) => {
        if (!Array.isArray(findResult)) findResult = [findResult];
        for (const instance of findResult) {
          if (instance.commentable_type === "image" && instance.Image !== undefined) {
            instance.commentable = instance.Image;
            instance.dataValues.commentable = instance.Image;
          } else if (instance.commentable_type === "video" && instance.Video !== undefined) {
            instance.commentable = instance.Video;
            instance.dataValues.commentable = instance.Video;
          }
          // To prevent mistakes:
          delete instance.Image;
          delete instance.dataValues.Image;
          delete instance.Video;
          delete instance.dataValues.Video;
        }
      }
    },
    sequelize,
    tableName: 'comments',
  });
  return Comment;
};
