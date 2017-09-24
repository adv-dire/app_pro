'use strict';
angular.module('app').controller('meCtr', ['$http','$q','$scope', function($http,$q,$scope){
$scope.fh=function(){
	 window.history.back();
}
}]);