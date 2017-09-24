'use strict';
angular.module('app').directive('appPldata', [function(){
  return {
    priority:0,
    restrict: 'A',
    replace: true,
    scope:{
    	bookdata:'=',
    	filterObj:'=',
    	order:'=',
        orderlx:'=',
    },
    templateUrl: 'view/template/pldata.html',
    link:function($scope,element,attr){ 
    }
   
  };
}]);