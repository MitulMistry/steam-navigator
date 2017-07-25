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

  ctrl.setScreenshotGrid = function() {
    if ($mdMedia('xs')) {
      $scope.screenshotGrid = GridService.createGrid(game.data.screenshots, 1);
    } else if ($mdMedia('sm')) {
      $scope.screenshotGrid = GridService.createGrid(game.data.screenshots, 2);
    } else if ($mdMedia('md')) {
      $scope.screenshotGrid = GridService.createGrid(game.data.screenshots, 3);
    } else {
      $scope.screenshotGrid = GridService.createGrid(game.data.screenshots, 4);
    }
  }

  ctrl.setScreenshotGrid(); //Set grid initially on load

  $scope.$watch(function() { return $mdMedia('xs'); }, function(big) {
    ctrl.setScreenshotGrid();
  });

  $scope.$watch(function() { return $mdMedia('sm'); }, function(big) {
    ctrl.setScreenshotGrid();
  });

  $scope.$watch(function() { return $mdMedia('md'); }, function(big) {
    ctrl.setScreenshotGrid();
  });

  $scope.$watch(function() { return $mdMedia('gt-md'); }, function(big) {
    ctrl.setScreenshotGrid();
  });

  // $scope.screenshotGrid = ctrl.setScreenshotGrid();

  // $scope.$watch(function() { return $mdMedia(); }, function() {
  //   ctrl.setScreenshotGrid();
  // });

  // $scope.$watch(function() { return $mdMedia('xs'); }, function(big) {
  //   $scope.screenshotGrid = GridService.createGrid(game.data.screenshots, 2);
  // });
  //
  // $scope.$watch(function() { return $mdMedia('layout-gt-md'); }, function(big) {
  //   $scope.screenshotGrid = GridService.createGrid(game.data.screenshots, 4);
  // });
}

angular
  .module('app')
  .controller('GameController', GameController);
