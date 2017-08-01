function ShowOnLoad() {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      element.bind('load', function() {
        console.log('image is loaded');
      });
      element.bind('error', function(){
        console.log('image could not be loaded');
      });
    }
  };
}

angular
  .module('app')
  .directive('showOnLoad', ShowOnLoad);
