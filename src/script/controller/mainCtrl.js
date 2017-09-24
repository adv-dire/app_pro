'use strict';
angular.module('app').controller('mainCtrl', ['dist','$http','$q','$scope', function(dist,$http,$q,$scope){
  $http.get('data/autoImg_data.json',{
  }).then(function(success){
  	setTimeout(function() {  
  		$scope.$apply(function() {
  	   $scope.autoimg=success.data;
  	    }); 
  	     }, 10); 
   
})
  $scope.nav=dist.nav;

}]);