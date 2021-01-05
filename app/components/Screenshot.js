import screenshotTemplate from '../../views/games/_screenshot.html';

var Screenshot = {
  template: screenshotTemplate,
  bindings: { //define arguments being passed to component - bindings for components, scope for directives
    data: '=' //set data to a variable being passed in, i.e. when used: <item data="post"></item>
  },
  controller: function($scope) { //can add functionality to a controller for this component by injecting dependencies such as a service
    var ctrl = this;
    $scope.visible = false;
  },
  controllerAs: 'ctrl' //sets controller to be refered to as game in the template
};

angular
  .module('app')
  .component('screenshot', Screenshot); //lowercase string name because no capitalization in DOM element when this component is used
