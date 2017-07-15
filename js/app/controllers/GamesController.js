function GamesController(games) { //games are injected from app.js resolve
  var ctrl = this;
  ctrl.games = games;
}

angular
  .module('app')
  .controller('GamesController', GamesController);
