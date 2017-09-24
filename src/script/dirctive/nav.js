'use strict';
angular.module('app').directive('appNav', [function(){
  return {
    restrict: 'A',
    replace: true,
    templateUrl: 'view/template/nav.html',
  };
}]);