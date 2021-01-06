import gamesIndexTemplate from '../views/games/index.html';
import gamesShowTemplate from '../views/games/show.html';

angular
  .module('app', [ //define module and include dependencies
    'ui.router', //for routing
    'ngMaterial', //Angular material
  ])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){ //inject $stateProvider for ui-router and $urlRouterProvider for 'otherwise' method
    $stateProvider
      .state('topSellers', { //create a ui-router state
        url: '/top',
        template: gamesIndexTemplate,
        controller: 'GamesController as ctrl', //set controller for this route (equavelent of using <ng-controller="..."> in template)
        resolve: { //execute this code before the template is rendered
          games: ['GamesService', function (GamesService) {  //set games equal to GamesService.getTopSellers() to be used in the template
            return GamesService.getTopSellers();
          }]
        }
      })
      .state('newReleases', {
        url: '/new',
        template: gamesIndexTemplate,
        controller: 'GamesController as ctrl',
        resolve: {
          games: ['GamesService', function (GamesService) {
            return GamesService.getNewReleases();
          }]
        }
      })
      .state('specials', {
        url: '/specials',
        template: gamesIndexTemplate,
        controller: 'GamesController as ctrl',
        resolve: {
          games: ['GamesService', function (GamesService) {
            return GamesService.getSpecials();
          }]
        }
      })
      .state('comingSoon', {
        url: '/coming',
        template: gamesIndexTemplate,
        controller: 'GamesController as ctrl',
        resolve: {
          games: ['GamesService', function (GamesService) {
            return GamesService.getComingSoon();
          }]
        }
      })
      .state('game', {
        url: '/games/:id',
        template: gamesShowTemplate,
        controller: 'GameController as ctrl',
        resolve: {
          game: ['$stateParams', 'GamesService', function ($stateParams, GamesService) {
            return GamesService.getGame($stateParams.id);
          }]
        }
      });

      $urlRouterProvider.otherwise('/top'); //default route
  }]);