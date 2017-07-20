function GridService() {
  this.createGrid = function(items, columns) { //grid needs to be something like: $scope.grid = [[1,2,3],[4,5,6],[7,8,9]];
    var returnGrid = [];
    var row = [];

    items.forEach(function(item, index) {
      row.push(item);

      if( (index + 1) % columns === 0) { //+1  to offset 0 index
        returnGrid.push(row);
        row = [];
      }
    });

    return returnGrid;
  }
}

angular
  .module('app')
  .service('GridService', GridService);
