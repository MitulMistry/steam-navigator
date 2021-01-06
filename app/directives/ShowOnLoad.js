function ShowOnLoad() {
  return {
    restrict: 'A', //restrict use as attribute
    link: function(scope, element, attrs) {
      element.bind('load', function() {
        scope.$apply(function() { // can add class element if needed, ex: element.addClass('animationIf');
          scope.visible = true; //sets $scope.visible variable to true, needs to be set to false initially in controller, element ng-show="visible", and class="fade" to trigger animation
        });
      });
      element.bind('error', function(){
        console.log('Image could not be loaded');
      });
    }
  };
}

angular
  .module('app')
  .directive('showOnLoad', ShowOnLoad);
