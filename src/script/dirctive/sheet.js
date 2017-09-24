'use strict';
angular.module('app').directive('appSheet', ['$state','$http',function($state,$http){
  return {
    restrict: 'A',
    replace: true,
    templateUrl: 'view/template/sheet.html',
    link:function($scope,element,attr){
    	 $http.get('data/foot.json',{
  }).then(function(success){
      $scope.bookdata=success.data;
});
          $scope.flag=0;  
  	 	  $scope.$watch($state.params.id,function(newid){

  	     $scope.flag=newid;
  	 })
 
  //$scope.flag=$state.params.id;
   
    }
  };
}]);