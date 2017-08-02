function ShowOnLoad() {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      element.bind('load', function() {
        // element.addClass('animationIf');
        scope.$apply(function() {
          // element.addClass('test-red'); //animationIf
          scope.visible = true; //sets $scope.visible variable to true, needs to be set to false initially in controller, element ng-show="visible", and class="fade" to trigger animation
        });
        // console.log('Image is loaded');
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
