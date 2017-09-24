'use strict';
angular.module('app').controller('registerCtr', ['$state','$scope', function($state,$scope){
$scope.submit=function(){
	$state.go('login');
}
}]);