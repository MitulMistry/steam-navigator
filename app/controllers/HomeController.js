function HomeController($mdSidenav) {
  var ctrl = this;
  ctrl.date = new Date();

  ctrl.toggleSideNav = function() {
    $mdSidenav('left').toggle();
  };
}

angular
  .module('app')
  .controller('HomeController', HomeController);
