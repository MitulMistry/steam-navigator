function GameController(game) { //game is injected from app.js resolve
  var ctrl = this;
  ctrl.game = game;
}

angular
  .module('app')
  .controller('GameController', GameController);
