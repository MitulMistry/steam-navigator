function GamesController(games, $scope) { //games are injected from app.js resolve
  var ctrl = this;
  ctrl.games = games;
  // $scope.grid = [[1,2,3],[4,5,6],[7,8,9]];


  ctrl.createGrid = function() {
    var returnGrid = [];
    var row = [];

    games.forEach(function(game, index) {
      row.push(game);

      if( (index + 1) % 3 === 0) { //+1  to offset 0 index
        returnGrid.push(row);
        row = [];
      }
    });

    return returnGrid;

    // for(var i = 0; i < i.length; i++) {
    //
    //   for(var j = 0; j < 3; j++) {
    //
    //   }
    //
    // }
  }

  $scope.grid = ctrl.createGrid();
}

angular
  .module('app')
  .controller('GamesController', GamesController);
