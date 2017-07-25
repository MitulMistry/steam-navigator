function GameController(game, $scope, $sce, GridService, $mdMedia) { //game is injected from app.js resolve
  var ctrl = this;
  ctrl.game = game;

  $scope.showDetailedDescription = false;
  $scope.shortDescription = $sce.trustAsHtml(game.data.short_description); //https://stackoverflow.com/a/31333196
  $scope.detailedDescription = $sce.trustAsHtml(game.data.detailed_description);

  $scope.toggleDetailedDescription = function() {
    $scope.showDetailedDescription = !$scope.showDetailedDescription;
  }

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

  $scope.setScreenshotGrid = function() {
    $scope.screenshotGrid = GridService.setDefaultGrid(game.data.screenshots);
  }

  $scope.setScreenshotGrid(); //Set grid initially on load

  //material breakpoint listeners
  $scope.$watch(function() { return $mdMedia('xs'); }, function() {
    $scope.setScreenshotGrid();
  });

  $scope.$watch(function() { return $mdMedia('sm'); }, function() {
    $scope.setScreenshotGrid();
  });

  $scope.$watch(function() { return $mdMedia('md'); }, function() {
    $scope.setScreenshotGrid();
  });

  $scope.$watch(function() { return $mdMedia('gt-md'); }, function() {
    $scope.setScreenshotGrid();
  });
}

angular
  .module('app')
  .controller('GameController', GameController);
