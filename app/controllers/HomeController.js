function HomeController($mdSidenav) {
  var ctrl = this;
  ctrl.date = new Date();

  ctrl.toggleSideNav = function() {
    $mdSidenav('left').toggle();
  };
}

HomeController.$inject = ['$mdSidenav']; //explicit dependency injection for Webpack JS minification

angular
  .module('app')
  .controller('HomeController', HomeController);
