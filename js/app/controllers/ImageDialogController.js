function ImageDialogController($scope, $mdDialog, imagePath) {
  var ctrl = this;
  $scope.imagePath = imagePath;
  $scope.visible = false;
}

angular
  .module('app')
  .controller('ImageDialogController', ImageDialogController);
