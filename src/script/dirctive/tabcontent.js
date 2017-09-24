'use strict';
angular.module('app').directive('appTabcontent', ['cache','shoucang','$http',function(cache,shoucang,$http){
  return {
    restrict: 'A',
    replace: true,
    scope:{
      text: '@',
      dttext: '@',
      tabdt:"=",
      tabrm:"=",
      tabfx:"=",
      active:'=',
      onCli:'&',
      pathimg:'=',
      onTab:'&',
      selected:'=',
      toggle:'=',
       onNinter:'&',
       onFlytf:'&',
       show:'=',
       onClosebox:'&',
      
    },
    templateUrl: 'view/template/tabcontent.html',
    link:function($scope,element,attr){
      if (cache.get("tabid")=='') {
         $scope.idx=1;
       }else{
         $scope.idx=cache.get("tabid");
       }
     
  var mySwiper = new Swiper('.swiper-container', {
        resistanceRatio :0,
        initialSlide: $scope.idx,
         scrollbar: '.swiper-scrollbar',
         scrollbarDraggable : true ,
         scrollbarSnapOnRelease : true ,
         scrollbarHide:false,
         onSlideChangeStart: function(swiper){
          cache.put("tabid",swiper.activeIndex);
         // $scope.idx=cache.get("tabid");
         //console.log($scope.idx);
    }

})
  // mySwiper.onResize();
    }

  };
}]);