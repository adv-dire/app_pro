'use strict';
angular.module('app').directive('appTuijian', [function(){
  return {
    restrict: 'A',
    replace: true,
    templateUrl: 'view/template/tuijian.html',
    link:function($scope,element,attr){
var swiper = new Swiper('#tuijianauto', {
        pagination: '.swiper-pagination',
        slidesPerView:2.6,
        spaceBetween:11,
        freeMode: true,
        slidesOffsetBefore :5,
        resistanceRatio : 0.3,
        slidesOffsetAfter :15,
    });

    }
  }
}]);