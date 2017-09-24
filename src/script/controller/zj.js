'use strict';
angular.module('app').controller('zjCtr', ['shoucang','$http','$q','$scope', function(shoucang,$http,$q,$scope){
$scope.tabdata=[{
	'name':'动态',
	
	
},{
	'name':'热门',
},{
	'name':'发现'
}
];
 /*$http.get('data/shujidata.json',{
  }).then(function(success){
      $scope.dongtdata=success.data;
     // console.log($scope.shujidata);
});*/
 $scope.dongtdata=shoucang.dtdata;

 $http.get('data/found.json',{
  }).then(function(success){
      $scope.foundData=success.data;
});



  var data=shoucang.rmdata;
  angular.forEach(data,function(data,index,arry){
  	console.log(arry[index].heart="image/星.png");
  })
$scope.remdata=data;
 setTimeout(function() {  
 	if ($scope.remdata=='') {
	$scope.tg=true;
	//console.log(45);
}else{
	$scope.tg=false;
	//console.log(54);
}
 	$scope.$apply();
        },100);
 
setTimeout(function() {  
  if ($scope.dongtdata=='') {
  $scope.hide=true;
}else{
 $scope.hide=false;
}
  $scope.$apply();
        },100);

}]);