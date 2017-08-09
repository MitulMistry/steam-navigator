describe('ImageDialogController', function() {
  beforeEach(module('app'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  // it('should have current year', function() {
  //   var $scope = {};
  //
  //   var controller = $controller('HomeController', { $scope: $scope });
  //   expect(controller.date).toEqual(jasmine.any(Date)); //should equal a Date object
  //   expect(controller.date.getFullYear()).toEqual(new Date().getFullYear()); //should equal current year
  // });
});
