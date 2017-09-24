'use strict';
angular.module('app').directive('appTop', [function(){
  return {
    restrict: 'A',
    replace: true,
    templateUrl: 'view/template/top.html',
  };
}]);