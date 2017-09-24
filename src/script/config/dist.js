'use strice';
angular.module('app').value('dist',[]).run(['dist','$http',function (dist,$http) {
	 $http.get('data/nav.json',{
  }).then(function(success){
  	dist.nav=success.data;
})
}])