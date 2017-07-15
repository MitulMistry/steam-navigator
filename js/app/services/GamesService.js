var API_URL = 'http://store.steampowered.com/api';
var featuredCategories;

function GamesService($http, $sce) {
  this.getFeaturedCategories = function() {
    if (!featuredCategories) { //If the response hasn't already been stored
      featuredCategories = $http.get(API_URL + '/featuredcategories');
      return featuredCategories;
    } else {
      return featuredCategories;
    }
  }

  this.getTopSellers = function() {
    return this.getFeaturedCategories()["top_sellers"];
  }

  this.getNewReleases = function() {
    return this.getFeaturedCategories()["new_releases"];
  }

  this.getSpecials = function() {
    return this.getFeaturedCategories()["specials"];
  }

  this.getComingSoon = function() {
    return this.getFeaturedCategories()["coming_soon"];
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
