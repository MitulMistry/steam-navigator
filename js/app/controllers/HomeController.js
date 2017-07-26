function HomeController($scope, $mdSidenav) {
  var ctrl = this;
  $scope.date = new Date();

  $scope.toggleSideNav = function() {
    $mdSidenav('left').toggle();
  };
}

angular
  .module('app')
  .controller('HomeController', HomeController);
