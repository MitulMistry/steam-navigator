function GamesController(games, $scope) { //games are injected from app.js resolve
  var ctrl = this;
  ctrl.games = games;

  ctrl.createGrid = function(columns) { //grid needs to be something like: $scope.grid = [[1,2,3],[4,5,6],[7,8,9]];
    var returnGrid = [];
    var row = [];

    games.forEach(function(game, index) {
      row.push(game);

      if( (index + 1) % columns === 0) { //+1  to offset 0 index
        returnGrid.push(row);
        row = [];
      }
    });

    return returnGrid;
  }

  $scope.grid = ctrl.createGrid(3);
}

angular
  .module('app')
  .controller('GamesController', GamesController);
