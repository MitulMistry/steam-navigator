function ImageDialogController($scope, $mdDialog, imagePath) {
  var ctrl = this;
  $scope.imagePath = imagePath;
}

angular
  .module('app')
  .controller('ImageDialogController', ImageDialogController);
