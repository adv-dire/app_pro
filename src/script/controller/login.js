'use strict';
angular.module('app').controller('loginCtr', ['cache','$state','$scope', function(cache,$state,$scope){
$scope.submit=function(){
	$state.go('main',{
		id:'0'
	});
}
$scope.user={
	phone:''
}
$scope.$watch('user.phone',function(newval){
	if (newval) {
		cache.put('username',newval);
		//console.log(cache.get('username'));
	}
	
})

}]);