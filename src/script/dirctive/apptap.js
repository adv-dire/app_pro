'use strict';
angular.module('app').directive('appTab', [function(){
  return {
    restrict: 'A',
    replace: true,
    
    templateUrl: 'view/template/apptab.html'

  };
}]);