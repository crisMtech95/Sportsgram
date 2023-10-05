'use strict';


let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}


module.exports = {
  up: (queryInterface, Sequelize) => {
      options.tableName = 'comments';
      return queryInterface.bulkInsert(options, [
        {
        userId: 1,
        imageId: 1,
        comment: "best player of all time, the goat.",
        createdAt: "2021-06-21 17:38:46.592231-04",
        updatedAt: "2021-06-21 17:38:46.592231-04",
      },
        {
        userId: 1,
        imageId: 1,
        comment: "best playedrtgbxvdfrvszrgaetsfnr of all time, the gozdbgfxfbat.",
        createdAt: "2021-06-21 17:38:46.592231-04",
        updatedAt: "2021-06-21 17:38:46.592231-04"
      },
        {
        userId: 1,
        imageId: 1,
        comment: "best playedtbgfbxdrgtr of all tdntdbatndendsthbtime, the goat.",
        createdAt: "2021-06-21 17:38:46.592231-04",
        updatedAt: "2021-06-21 17:38:46.592231-04"
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    options.tableName = 'comments';
      return queryInterface.bulkDelete(options, null, {});
  }
};
