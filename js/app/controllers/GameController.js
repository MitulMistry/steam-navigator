function GameController(game, $scope, $sce) { //game is injected from app.js resolve
  var ctrl = this;
  ctrl.game = game;

  $scope.shortDescription = $sce.trustAsHtml(game.data.short_description); //https://stackoverflow.com/a/31333196
  $scope.detailedDescription = $sce.trustAsHtml(game.data.detailed_description);


}

angular
  .module('app')
  .controller('GameController', GameController);
