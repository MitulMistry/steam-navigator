function GameController(game, $scope, $sce, GridService, $mdMedia) { //game is injected from app.js resolve
  var ctrl = this;
  ctrl.game = game.data;

  ctrl.showDetailedDescription = false;
  ctrl.shortDescription = $sce.trustAsHtml(ctrl.game.short_description); //https://stackoverflow.com/a/31333196
  ctrl.detailedDescription = $sce.trustAsHtml(ctrl.game.detailed_description);

  ctrl.toggleDetailedDescription = function() {
    ctrl.showDetailedDescription = !ctrl.showDetailedDescription;
  }

  ctrl.getDevelopers = function() {
    return ctrl.game.developers.join(', ');
  }

  ctrl.getPublishers = function() {
    return ctrl.game.publishers.join(', ');
  }

  ctrl.getCategories = function() {
    var array = ctrl.game.categories.map(function(category) {
      return category.description;
    });

    return array.join(', ');
  }

  ctrl.getGenres = function() {
    var array = ctrl.game.genres.map(function(genre) {
      return genre.description;
    });

    return array.join(', ');
  }

  function setScreenshotGrid() {
    ctrl.screenshotGrid = GridService.setDefaultGrid(ctrl.game.screenshots);
  }

  setScreenshotGrid(); //Set grid initially on load

  //material breakpoint listeners
  $scope.$watch(function() { return $mdMedia('xs'); }, function() {
    setScreenshotGrid();
  });

  $scope.$watch(function() { return $mdMedia('sm'); }, function() {
    setScreenshotGrid();
  });

  $scope.$watch(function() { return $mdMedia('md'); }, function() {
    setScreenshotGrid();
  });

  $scope.$watch(function() { return $mdMedia('gt-md'); }, function() {
    setScreenshotGrid();
  });
}

angular
  .module('app')
  .controller('GameController', GameController);
