'use strict';
angular.module('app').directive('appHead', ['$timeout','$window','cache','$state',function($timeout,$window,cache,$state){
  return {
    restrict: 'A',
    replace: true,
    templateUrl: 'view/template/search.html',
    link:function(scope,element,attr){
         scope.hide=true;
        scope.login=function(){
            if (cache.get('username')) {
                return;
            }else{
            $state.go('login');
            }
        }
    	if (cache.get('username')) {
    		scope.name=cache.get('username');
    	}else{
           scope.name="去登录"; 
        }
       var div=element[0].nextElementSibling
       setTimeout(function(){
     scope.width=attr.$$element["0"].nextElementSibling.clientHeight;
       },10)
        $window.document.onscroll=function(){
            scope.$apply(function(){
 if($window.document.body.scrollTop>scope.width+100){
                scope.hide=false
               // console.log( scope.hide);
            }else{
                 scope.hide=true;
                
            }
            })
           
        };	
    }
  };
}]);