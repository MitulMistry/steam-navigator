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

  function setGameGrid() {
    ctrl.grid = GridService.setDefaultGrid(games); //returns nested grid array, like: [[1,2,3],[4,5,6],[7,8,9]]
  }

  setGameGrid(); //Set grid initially on load

  //material breakpoint listeners
  $scope.$watch(function() { return $mdMedia('xs'); }, function() {
    setGameGrid();
  });

  $scope.$watch(function() { return $mdMedia('sm'); }, function() {
    setGameGrid();
  });

  $scope.$watch(function() { return $mdMedia('md'); }, function() {
    setGameGrid();
  });

  $scope.$watch(function() { return $mdMedia('gt-md'); }, function() {
    setGameGrid();
  });
}

angular
  .module('app')
  .controller('GamesController', GamesController);
