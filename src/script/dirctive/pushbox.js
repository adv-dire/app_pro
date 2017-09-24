'use strict';
angular.module('app').directive('appPushbox', ['$animate',function($animate){
  return {
    restrict: 'A',
    replace: true,
    scope:{
    	hide:'=',
    	isClick:'&'
    },
    templateUrl: 'view/template/pushbox.html'
  };
}]);