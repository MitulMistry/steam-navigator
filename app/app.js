angular
  .module('app', [ //define module and include dependencies
    'ui.router', //for routing
    'ngMaterial' //Angular material
  ])
  .config(function($stateProvider, $urlRouterProvider){ //inject $stateProvider for ui-router and $urlRouterProvider for 'otherwise' method
    $stateProvider
      .state('topSellers', { //create a ui-router state
        url: '/top',
        templateUrl: 'views/games/index.html',
        controller: 'GamesController as ctrl', //set controller for this route (equavelent of using <ng-controller="..."> in template)
        resolve: { //execute this code before the template is rendered
          games: function (GamesService) {  //set games equal to GamesService.getTopSellers() to be used in the template
            return GamesService.getTopSellers();
          }
        }
      })
      .state('newReleases', {
        url: '/new',
        templateUrl: 'views/games/index.html',
        controller: 'GamesController as ctrl',
        resolve: {
          games: function (GamesService) {
            return GamesService.getNewReleases();
          }
        }
      })
      .state('specials', {
        url: '/specials',
        templateUrl: 'views/games/index.html',
        controller: 'GamesController as ctrl',
        resolve: {
          games: function (GamesService) {
            return GamesService.getSpecials();
          }
        }
      })
      .state('comingSoon', {
        url: '/coming',
        templateUrl: 'views/games/index.html',
        controller: 'GamesController as ctrl',
        resolve: {
          games: function (GamesService) {
            return GamesService.getComingSoon();
          }
        }
      })
      .state('game', {
        url: '/games/:id',
        templateUrl: 'views/games/show.html',
        controller: 'GameController as ctrl',
        resolve: {
          game: function ($stateParams, GamesService) {
            return GamesService.getGame($stateParams.id);
          }
        }
      });

      $urlRouterProvider.otherwise('/top'); //default route
  });
