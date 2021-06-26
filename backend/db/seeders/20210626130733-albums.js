'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('albums', [
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

    return queryInterface.bulkDelete('albums', null, {});

  }
};
