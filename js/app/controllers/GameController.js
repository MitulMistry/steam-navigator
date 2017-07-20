function GameController(game, $scope, $sce) { //game is injected from app.js resolve
  var ctrl = this;
  ctrl.game = game;

  $scope.shortDescription = $sce.trustAsHtml(game.data.short_description); //https://stackoverflow.com/a/31333196
  $scope.detailedDescription = $sce.trustAsHtml(game.data.detailed_description);

  $scope.getDevelopers = function() {
    return game.data.developers.join();
  }

  $scope.getPublishers = function() {
    return game.data.publishers.join();
  }

  $scope.getCategories = function() {
    var string = new String();
    game.data.categories.forEach(function(category) {
      string += (category.description + ', ');
    });
    return string;
  }

  $scope.getGenres = function() {
    var string = new String();
    game.data.genres.forEach(function(genre) {
      string += (genre.description + ', ');
    });
    return string;
  }
}

angular
  .module('app')
  .controller('GameController', GameController);
