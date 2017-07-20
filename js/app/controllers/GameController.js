function GameController(game, $scope, $sce, GridService) { //game is injected from app.js resolve
  var ctrl = this;
  ctrl.game = game;

  $scope.shortDescription = $sce.trustAsHtml(game.data.short_description); //https://stackoverflow.com/a/31333196
  $scope.detailedDescription = $sce.trustAsHtml(game.data.detailed_description);

  $scope.screenshotGrid = GridService.createGrid(game.data.screenshots, 4);

  $scope.getDevelopers = function() {
    return game.data.developers.join(', ');
  }

  $scope.getPublishers = function() {
    return game.data.publishers.join(', ');
  }

  $scope.getCategories = function() {
    var array = game.data.categories.map(function(category) {
      return category.description;
    });

    return array.join(', ');
  }

  $scope.getGenres = function() {
    var array = game.data.genres.map(function(genre) {
      return genre.description;
    });

    return array.join(', ');
  }
}

angular
  .module('app')
  .controller('GameController', GameController);
