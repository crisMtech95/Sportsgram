'use strict';
module.exports = (sequelize, DataTypes) => {
  const album = sequelize.define('album', {
    userId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    sport: DataTypes.STRING
  }, {});
  album.associate = function(models) {
    album.belongsTo(models.User, { foreignKey: 'userId' });
    album.hasMany(models.image, { foreignKey: 'albumId' });
  };
  return album;
};
