var API_URL = '/api'; //using Node + Express proxy API to circumvent cross-origin from: 'https://store.steampowered.com/api'
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
    var data = this.getFeaturedCategories().then(function successCallback(response) {
      return response["data"]["top_sellers"]["items"];
    }, function errorCallback(response) {
      console.log("API error");
      console.log(response);
    });

    return data;
  }

  this.getNewReleases = function() {
    var data = this.getFeaturedCategories().then(function successCallback(response) {
      return response["data"]["new_releases"]["items"];
    }, function errorCallback(response) {
      console.log("API error");
      console.log(response);
    });

    return data;
  }

  this.getSpecials = function() {
    var data = this.getFeaturedCategories().then(function successCallback(response) {
      return response["data"]["specials"]["items"];
    }, function errorCallback(response) {
      console.log("API error");
      console.log(response);
    });

    return data;
  }

  this.getComingSoon = function() {
    var data = this.getFeaturedCategories().then(function successCallback(response) {
      return response["data"]["coming_soon"]["items"];
    }, function errorCallback(response) {
      console.log("API error");
      console.log(response);
    });

    return data;
  }

  this.getGame = function(id) {
    var data = $http.get(API_URL + '/appdetails/' + id) //, {params: { appids: id }}
    .then(function successCallback(response) {
      return response["data"][id.toString()];
    }, function errorCallback(response) {
      console.log("API error");
      console.log(response);
    });

    return data;
  }
}

angular
  .module('app')
  .service('GamesService', GamesService);
