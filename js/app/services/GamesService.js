var API_URL = 'http://store.steampowered.com/api';

function GamesService($http) {
  this.getTopSellers = function() {
    return $http.get(API_URL + '/featured')["top_sellers"];
  }

  this.getNewReleases = function() {
    return $http.get(API_URL + '/featured')["new_releases"];
  }

  this.getSpecials = function() {
    return $http.get(API_URL + '/featured')["specials"];
  }

  this.getComingSoon = function() {
    return $http.get(API_URL + '/featured')["coming_soon"];
  }

  this.getGame = function(id) {
    return $http.get(API_URL + '/appdetails/', {
      params: { appids: id }
    });
  }
}

angular
  .module('app')
  .service('GamesService', GamesService);
