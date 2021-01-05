function GamesService($http) {
  var API_URL = '/api'; //using Node + Express proxy API to circumvent cross-origin request from: 'https://store.steampowered.com/api'
  var featuredCategories;

  this.getFeaturedCategories = function() {
    if (!featuredCategories) { //If the response hasn't already been stored
      featuredCategories = $http.get(API_URL + '/featuredcategories'); //store the response in the variable
      return featuredCategories;
    } else {
      return featuredCategories;
    }
  }

  this.getTopSellers = function() {
    return this.getFeaturedCategories()
    .then(function successCallback(response) {
      return response["data"]["top_sellers"]["items"];
    }, function errorCallback(response) {
      logError(response);
    });
  }

  this.getNewReleases = function() {
    return this.getFeaturedCategories()
    .then(function successCallback(response) {
      return response["data"]["new_releases"]["items"];
    }, function errorCallback(response) {
      logError(response);
    });
  }

  this.getSpecials = function() {
    return this.getFeaturedCategories()
    .then(function successCallback(response) {
      return response["data"]["specials"]["items"];
    }, function errorCallback(response) {
      logError(response);
    });
  }

  this.getComingSoon = function() {
    return this.getFeaturedCategories()
    .then(function successCallback(response) {
      return response["data"]["coming_soon"]["items"];
    }, function errorCallback(response) {
      logError(response);
    });
  }

  this.getGame = function(id) {
    return $http.get(API_URL + '/appdetails/' + id) //, {params: { appids: id }}
    .then(function successCallback(response) {
      return response["data"][id.toString()];
    }, function errorCallback(response) {
      logError(response);
    });
  }

  function logError(response) { //private function
    console.log("API error");
    console.log(response);
  }
}

GamesService.$inject = ['$http']; //explicit dependency injection for Webpack JS minification

angular
  .module('app')
  .service('GamesService', GamesService);
