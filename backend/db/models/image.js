'use strict';
module.exports = (sequelize, DataTypes) => {
  const image = sequelize.define('image', {
    userId: DataTypes.INTEGER,
    albumId: DataTypes.INTEGER,
    imageUrl: DataTypes.STRING,
    content: DataTypes.STRING,
    sport: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {});
  image.associate = function(models) {
    image.belongsTo(models.User, { foreignKey: 'userId' });
    image.belongsTo(models.album, { foreignKey: 'albumId'});
    image.hasMany(models.comment, { foreignKey: 'imageId' });
  };
  return image;
};

