var API_URL = 'http://store.steampowered.com/api';
var featuredCategories;

function GamesService($http) {
  this.getFeaturedCategories = function() {
    if (!featuredCategories) { //If the response hasn't already been stored
      featuredCategories = $http.get(API_URL + '/featuredcategories');
      return featuredCategories;
    } else {
      return featuredCategories;
    }
  }

  this.getTopSellers = function() {
    this.getFeaturedCategories().then(function successCallback(response) {
      return response["data"]["top_sellers"]["items"];
    }, function errorCallback(response) {
      console.log("API error");
      console.log(response);
    });
  }

  this.getNewReleases = function() {
    this.getFeaturedCategories().then(function successCallback(response) {
      return response["data"]["new_releases"]["items"];
    }, function errorCallback(response) {
      console.log("API error");
      console.log(response);
    });
  }

  this.getSpecials = function() {
    this.getFeaturedCategories().then(function successCallback(response) {
      return response["data"]["specials"]["items"];
    }, function errorCallback(response) {
      console.log("API error");
      console.log(response);
    });
  }

  this.getComingSoon = function() {
    this.getFeaturedCategories().then(function successCallback(response) {
      return response["data"]["coming_soon"]["items"];
    }, function errorCallback(response) {
      console.log("API error");
      console.log(response);
    });
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
