'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('images', [{
        imageUrl: "https://icdn.football-espana.net/wp-content/uploads/2020/11/merlin_153612873_5bb119b9-8972-4087-b4fd-371cab8c5ba2-superJumbo.jpg",
        sport: "soccer",
        userId: 3,
        createdAt: "2021-06-21 17:38:46.592231-04",
        updatedAt: "2021-06-21 17:38:46.592231-04"
      }]);
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('images', null, {});
  }
};
