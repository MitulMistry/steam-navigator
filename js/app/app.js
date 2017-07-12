angular
  .module('app', [ //define module and include dependencies
    'ui.router', //for routing
    'ngMaterial' //Angular material
  ])
  .config(function($stateProvider, $urlRouterProvider){ //inject $stateProvider for ui-router and $urlRouterProvider for 'otherwise' method
    $stateProvider
      .state('home', { //create a ui-router state
        url: '/',
        templateUrl: 'views/home.html',
        controller: 'HomeController as ctrl' //set controller for this route (equavelent of using <ng-controller="..."> in template)
      })
      .state('home.topSellers', {
        url: 'top',
        templateUrl: 'views/games/index.html',
        controller: 'GamesController as ctrl'
      })
      .state('home.newReleases', {
        url: 'new',
        templateUrl: 'views/games/index.html',
        controller: 'GamesController as ctrl'
      })
      .state('home.specials', {
        url: 'specials',
        templateUrl: 'views/games/index.html',
        controller: 'GamesController as ctrl'
      })
      .state('home.comingSoon', {
        url: 'coming',
        templateUrl: 'views/games/index.html',
        controller: 'GamesController as ctrl'
      })
      .state('home.game', {
        url: 'games/:id',
        templateUrl: 'views/games/show.html',
        controller: 'GameController as ctrl'
      });

      $urlRouterProvider.otherwise('/'); //default route
  });
