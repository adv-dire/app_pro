'use strict';
angular.module('app').directive('appAutoimg', [function(){
  return {
    restrict: 'A',
    replace: true,
    scope:{
        data:'='
    },

    templateUrl: 'view/template/autoimg.html',
    link:function($scope,element,attr){
  var mySwiper = new Swiper('#autoimg',{
            autoplayDisableOnInteraction:false,
            autoplay:5000,
            loop:'true',
            observer:'true',
           observeParents:true,  
        })
   }
  };
}]);