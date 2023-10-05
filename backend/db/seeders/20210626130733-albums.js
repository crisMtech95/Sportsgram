'use strict';


let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}


module.exports = {
  up: (queryInterface, Sequelize) => {
      options.tableName = 'albums';
      return queryInterface.bulkInsert(options, [
        {
          userId: 1,
          title: 'Demo',
          sport: "demo",
          createdAt: "2021-06-21 17:38:46.592231-04",
          updatedAt: "2021-06-21 17:38:46.592231-04",
        },
        {
          userId: 1,
          title: 'Demo',
          sport: "demo",
          createdAt: "2021-06-21 17:38:46.592231-04",
          updatedAt: "2021-06-21 17:38:46.592231-04",
        },
        {
          userId: 1,
          title: 'Demo',
          sport: "demo",
          createdAt: "2021-06-21 17:38:46.592231-04",
          updatedAt: "2021-06-21 17:38:46.592231-04",
        },
      ], {});

  },

  down: (queryInterface, Sequelize) => {
    options.tableName = 'albums';
    return queryInterface.bulkDelete(options, null, {});
  }
};
