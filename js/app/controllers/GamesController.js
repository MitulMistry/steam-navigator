function GamesController(games, $scope, $state, GridService) { //games are injected from app.js resolve
  var ctrl = this;
  ctrl.games = games;

  $scope.grid = GridService.createGrid(games, 3);

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
}

angular
  .module('app')
  .controller('GamesController', GamesController);
