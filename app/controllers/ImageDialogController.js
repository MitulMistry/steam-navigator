function ImageDialogController($scope, $mdDialog, imagePath) {
  var ctrl = this;
  $scope.imagePath = imagePath;
  $scope.visible = false;
}

ImageDialogController.$inject = ['$scope', '$mdDialog', 'imagePath']; //explicit dependency injection for Webpack JS minification

angular
  .module('app')
  .controller('ImageDialogController', ImageDialogController);
