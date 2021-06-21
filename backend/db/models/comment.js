'use strict';
module.exports = (sequelize, DataTypes) => {
  const comment = sequelize.define('comment', {
    userId: DataTypes.INTEGER,
    imageId: DataTypes.INTEGER,
    comment: DataTypes.STRING
  }, {});
  comment.associate = function(models) {
    comment.belongsTo(models.User, { foreignKey: 'userId' });
    comment.belongsTo(models.image, { foreignKey: 'imageId' });
  };
  return comment;
};
