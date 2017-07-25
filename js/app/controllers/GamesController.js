function GamesController(games, $scope, $state, GridService, $mdMedia) { //games are injected from app.js resolve
  var ctrl = this;
  ctrl.games = games;

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

  $scope.setGameGrid = function() {
    $scope.grid = GridService.setDefaultGrid(games);
  }

  $scope.setGameGrid(); //Set grid initially on load

  //material breakpoint listeners
  $scope.$watch(function() { return $mdMedia('xs'); }, function() {
    $scope.setGameGrid();
  });

  $scope.$watch(function() { return $mdMedia('sm'); }, function() {
    $scope.setGameGrid();
  });

  $scope.$watch(function() { return $mdMedia('md'); }, function() {
    $scope.setGameGrid();
  });

  $scope.$watch(function() { return $mdMedia('gt-md'); }, function() {
    $scope.setGameGrid();
  });
}

angular
  .module('app')
  .controller('GamesController', GamesController);
