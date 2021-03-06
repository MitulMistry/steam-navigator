function GridService($mdMedia) {
  this.createGrid = function(items, columns) { //grid needs to be something like: $scope.grid = [[1,2,3],[4,5,6],[7,8,9]];
    var returnGrid = [];
    var row = [];

    items.forEach(function(item, index) {
      row.push(item);

      if( (index + 1) % columns === 0 || (index + 1) === items.length) { //+1  to offset 0 index // || (index + 1) === items.length
        returnGrid.push(row); //currently cuts off extra items - i.e. if 10 items and 3x3 grid, will only use 9 items
        row = [];
      }
    });

    return returnGrid;
  }

  this.setDefaultGrid = function(items) { //returns default grid based on material breakpoints
    if ($mdMedia('xs')) {
      return this.createGrid(items, 1);
    } else if ($mdMedia('sm')) {
      return this.createGrid(items, 2);
    } else if ($mdMedia('md')) {
      return this.createGrid(items, 3);
    } else {
      return this.createGrid(items, 4);
    }
  }

  this.getColumnWidth = function() {
    if ($mdMedia('xs')) {
      return 100; //1 column
    } else if ($mdMedia('sm')) {
      return 50; //2 columns
    } else if ($mdMedia('md')) {
      return 33; //3 columns
    } else {
      return 25; //4 columns
    }
  }
}

GridService.$inject = ['$mdMedia']; //explicit dependency injection for Webpack JS minification

angular
  .module('app')
  .service('GridService', GridService);
