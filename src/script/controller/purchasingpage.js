'use strict';
angular.module('app').controller('purchasingpageCtr', ['$state','dist','$scope','$http', function($state,dist,$scope,$http){

 var swiper = new Swiper('#bookimg', {
 		observer:'true',
    roundLengths:true,
 		initialSlide :$state.params.idx,
        pagination: '.swiper-pagination',
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
		//normalizeSlideIndex:true,
        coverflow: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : true
        }
       
    
    });


 var mySwiper = new Swiper('#info',{
   roundLengths:true,
 	noSwiping : true,
noSwipingClass : 'stop-swiping',
 	observer:'true',
	effect : 'fade',
	fade: {
  crossFade: true,
		}
})
 swiper.params.control = mySwiper;//需要在Swiper2初始化后，Swiper1控制Swiper2
//mySwiper.params.control = swiper;//需要在Swiper1初始化后，Swiper2控制Swiper1

$scope.back=function(){
	 window.history.back();
}
 $scope.purdata=[];
$http.get('data/book.json',{
  }).then(function(success){
       $scope.bookdata=success.data;
      angular.forEach($scope.bookdata,function(data,index,arry){
      for (var i=0;i<arry[index].length;i++) {
     $scope.purdata.push(arry[index][i]);
     
      };
    }) 
});
}]);