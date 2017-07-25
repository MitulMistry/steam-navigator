function GamesController(games, $scope, $state, GridService, $mdMedia) { //games are injected from app.js resolve
  var ctrl = this;
  ctrl.games = games;

  // $scope.grid = GridService.createGrid(games, 3);

  ctrl.getStateName = function() {
    var stateName = $state.current.name;

    if (stateName === 'topSellers') {
      return 'Top Sellers';
    } else if(stateName === 'newReleases') {
      return 'New Releases';
    } else if(stateName === 'specials') {
      return 'Specials';
    } else if(stateName === 'comingSoon') {
      return 'Coming Soon';
    }
  }

  ctrl.setGameGrid = function() {
    if ($mdMedia('xs')) {
      $scope.grid = GridService.createGrid(games, 1);
    } else if ($mdMedia('sm')) {
      $scope.grid = GridService.createGrid(games, 2);
    } else if ($mdMedia('md')) {
      $scope.grid = GridService.createGrid(games, 3);
    } else {
      $scope.grid = GridService.createGrid(games, 4);
    }
  }

  ctrl.setGameGrid(); //Set grid initially on load

  //breakpoint listeners
  $scope.$watch(function() { return $mdMedia('xs'); }, function() {
    ctrl.setGameGrid();
  });

  $scope.$watch(function() { return $mdMedia('sm'); }, function() {
    ctrl.setGameGrid();
  });

  $scope.$watch(function() { return $mdMedia('md'); }, function() {
    ctrl.setGameGrid();
  });

  $scope.$watch(function() { return $mdMedia('gt-md'); }, function() {
    ctrl.setGameGrid();
  });
}

angular
  .module('app')
  .controller('GamesController', GamesController);
