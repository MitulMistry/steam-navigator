var API_URL = 'http://store.steampowered.com/api';
var featuredResponse;

function GamesService($http, $sce) {
  // this.trustSrc = function(src) {
  //   return $sce.trustAsResourceUrl(src);
  // };

  this.getFeatured = function() {
    if (!featuredResponse) { //If the response hasn't already been stored
      // var trustedUrl = this.trustSrc(API_URL + '/featuredcategories');
      // $http({
      //   method: 'JSONP',
      //   url: trustedUrl
      // }).then(function successCallback(response) { // this callback will be called asynchronously when the response is available
      //   featuredResponse = response;
      //   return featuredResponse;
      // }, function errorCallback(response) { // called asynchronously if an error occurs or server returns response with an error status.
      //   console.log("API Error");
      //   console.log(trustedUrl);
      //   console.log(response);
      // });

      // $http.jsonp(trustedUrl, {jsonpCallbackParam: 'callback'}).then(function(response) {
      //   console.log(response);
      //   return response;
      // });

    } else {
      return featuredResponse;
    }
  }

  this.getTopSellers = function() {
    return $http.get(API_URL + '/featuredcategories')["top_sellers"];
    // return this.getFeatured();
  }

  this.getNewReleases = function() {
    return $http.get(API_URL + '/featuredcategories')["new_releases"];
  }

  this.getSpecials = function() {
    return $http.get(API_URL + '/featuredcategories')["specials"];
  }

  this.getComingSoon = function() {
    return $http.get(API_URL + '/featuredcategories')["coming_soon"];
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
