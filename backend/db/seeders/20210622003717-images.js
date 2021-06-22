'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('images', [
        {
        imageUrl: "https://icdn.football-espana.net/wp-content/uploads/2020/11/merlin_153612873_5bb119b9-8972-4087-b4fd-371cab8c5ba2-superJumbo.jpg",
        sport: "soccer",
        userId: 3,
        content: "The England striker has not publicly stated that he wants to leave the club but he has made no secret about his desire to want to win trophies.Kane missed out on his first medal when Spurs were beaten by City in the Carabao Cup in April, while they have also missed out on qualification for the Champions League.He also revealed in an interview with former England international Gary Neville that he",
        createdAt: "2021-06-21 17:38:46.592231-04",
        updatedAt: "2021-06-21 17:38:46.592231-04"
      },
        {
        imageUrl: "http://cdn.cnn.com/cnnnext/dam/assets/130624174959-50-surf-spots-the-box.jpg",
        sport: "surfing",
        userId: 3,
        content: "The England striker has not publicly stated that he wants to leave the club but he has made no secret about his desire to want to win trophies.Kane missed out on his first medal when Spurs were beaten by City in the Carabao Cup in April, while they have also missed out on qualification for the Champions League.He also revealed in an interview with former England international Gary Neville that he",
        createdAt: "2021-06-21 17:38:46.592231-04",
        updatedAt: "2021-06-21 17:38:46.592231-04"
      },
        {
        imageUrl: "https://mk0f57hourscom1d61eq.kinstacdn.com/wp-content/uploads/2020/09/Rock-climbing-Canada.jpg",
        sport: "rock climbing",
        userId: 3,
        content: "The England striker has not publicly stated that he wants to leave the club but he has made no secret about his desire to want to win trophies.Kane missed out on his first medal when Spurs were beaten by City in the Carabao Cup in April, while they have also missed out on qualification for the Champions League.He also revealed in an interview with former England international Gary Neville that he",
        createdAt: "2021-06-21 17:38:46.592231-04",
        updatedAt: "2021-06-21 17:38:46.592231-04"
      },
        {
        imageUrl: "https://cdn.theathletic.com/app/uploads/2019/10/17032021/ronaldinho1-710x1024.png",
        sport: "soccer",
        userId: 3,
        content: "The England striker has not publicly stated that he wants to leave the club but he has made no secret about his desire to want to win trophies.Kane missed out on his first medal when Spurs were beaten by City in the Carabao Cup in April, while they have also missed out on qualification for the Champions League.He also revealed in an interview with former England international Gary Neville that he",
        createdAt: "2021-06-21 17:38:46.592231-04",
        updatedAt: "2021-06-21 17:38:46.592231-04"
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('images', null, {});
  }
};
