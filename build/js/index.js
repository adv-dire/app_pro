'use strict';
angular.module('app',['ui.router','ngCookies','validation','ngAnimate','lazyload']);
'use strict';
angular.module('app').service('cache',['$cookies',function($cookies) {
	this.put = function(key, value){
      $cookies.put(key, value);
    };
	this.get=function(key){
		return $cookies.get(key);
	}
	this.remove=function(key){
		$cookies.remove(key);
	}
}])
'use strice';
angular.module('app').value('dist',[]).run(['dist','$http',function (dist,$http) {
	 $http.get('data/nav.json',{
  }).then(function(success){
  	dist.nav=success.data;
})
}])
'use strict';
angular.module('app').config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
	$stateProvider.state('main',{
		url:'/main/:id',
		templateUrl:'view/main.html',
		controller:'mainCtrl'
	}).state('bookcity',{
		url:'/bookcity/:name',
		templateUrl:'view/bookcity.html',
		controller:'bookcityCtr'
	}).state('zj',{
		url:'/zj/:id',
		templateUrl:'view/zj.html',
		controller:'zjCtr'
	}).state('xq',{
		url:'/xq/:id',
		templateUrl:'view/xq.html',
		controller:'xqCtrl'
	}).state('cart',{
		url:'/cart/:id',
		templateUrl:'view/cart.html',
		controller:'cartCtr'
	}).state('purchasing',{
		url:'/purchasing/:idx',
		templateUrl:'view/purchasingpage.html',
		controller:'purchasingpageCtr'
	}).state('login',{
		url:'/login',
		templateUrl:'view/login.html',
		controller:'loginCtr'
	}).state('register',{
		url:'/register',
		templateUrl:'view/register.html',
		controller:'registerCtr'
	}).state('me',{
		url:'/me',
		templateUrl:'view/me.html',
		controller:'meCtr'
	})
	 $urlRouterProvider.otherwise('main/0');
}])
'use strict';
angular.module('app').config(['$validationProvider', function($validationProvider) {
  var expression = {
    phone: /^1[\d]{10}$/,
    password: function(value) {
      var str = value + ''
      return str.length > 5;
    },
    required: function(value) {
      return !!value;
    }
  };
  var defaultMsg = {
    phone: {
      success: '',
      error: '必须是11位手机号'
    },
    password: {
      success: '',
      error: '长度至少6位'
    },
    required: {
      success: '',
      error: '不能为空'
    }
  };
  $validationProvider.setExpression(expression).setDefaultMsg(defaultMsg);
}]);

'use strict';
angular.module('app').controller('bookcityCtr', ['shoucang','$state','$http','$scope', function(shoucang,$state,$http,$scope){
  $http.get('data/book.json',{
  }).then(function(success){
       $scope.bookdata=success.data;
      angular.forEach($scope.bookdata,function(data,index,arry){
      for (var i=0;i<arry[index].length;i++) {
     $scope.boobData_all.push(arry[index][i]);
      };
    }) 
});
  $scope.orderd=[{
    'des':'des',
    'ord':'pay'
  }];
  $scope.filterdataboj=[
  {
    id:'001',
    'name':'移动端'
  },
  {
    id:'002',
    'name':'web'
  },{
    id:'003',
    'name':'后端'
  }
  ]
$scope.boobData_all=[];
$scope.filterObj={};
$scope.filterdata;
  var name;
   $scope.filterdata=$scope.boobData_all;
   shoucang.purchasingpage=$scope.boobData_all;
  $scope.tabdata=[
  {
    id:'book',
    'name':'书籍类型'
},
{
    id:'',
    'name':'价格排序',

},
{
    id:'',
    'name':'销量排序'
}
  ];
  $scope.pushdata=[
  {
  	id:'',
    'name':'全部'
},
{
    id:'002',
    'name':'WEB'
},
{
    id:'001',
    'name':'移动端'
},
{
    id:'003',
    'name':'后台端'
}
  ];
  $scope.seclecte=0;
  $scope.isShow=false;
  $scope.selected=function(id,name){
  	 $scope.seclecte=id;
     if ($scope.seclecte==2) {
      if ($scope.orderd[0].ord==='pay') {
         $scope.orderd[0].ord='newprice';
      }else{
         $scope.orderd[0].ord='pay';
      }
     }
     if ($scope.seclecte==1) {
      if ( $scope.orderd[0].des==='des') {
         $scope.orderd[0].des='asc'
      }else{
        $scope.orderd[0].des='des';
      }
     }  
  	 if ($scope.seclecte==0) {

  	 	$scope.isShow=true;
       $scope.actives=true;
  	 }else{

  	 	$scope.isShow=false;
      $scope.actives=false;
  	 }
  	}
  if ($state.params.name!=='my') {
    $scope.filterObj['name']=$state.params.name;
  };

function filter(id){
  if (!id) {
     delete $scope.filterObj['name'];
    return;
  }
 angular.forEach($scope.filterdataboj,function(data,index,arry){
  if (id===arry[index].id) {
    $scope.filterObj['name']=arry[index].name;
   $scope.filterObj['name'];
  };
  })
}

  	$scope.parse=function(id,yh){
       $scope.isShow=false;
        $scope.actives=false;
         filter(id);
  			angular.forEach($scope.tabdata,function(data){
  				if (data.id) {
          data.name=yh;

  				}
  			})
  	}
   
    $scope.dd=function(){
      $scope.isShow=false;
      $scope.actives=false;
    }
    $scope.back=function(){
      window.history.back();
    }
   
}]);
'use strict';
angular.module('app').controller('cartCtr', ['$http','$q','$scope', function($http,$q,$scope){

}]);
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
'use strict';
angular.module('app').controller('meCtr', ['$http','$q','$scope', function($http,$q,$scope){
$scope.fh=function(){
	 window.history.back();
}
}]);
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
'use strict';
angular.module('app').controller('registerCtr', ['$state','$scope', function($state,$scope){
$scope.submit=function(){
	$state.go('login');
}
}]);
'use strict';
angular.module('app').controller('xqCtrl', ['shoucang','$http','$q','$scope', function(shoucang,$http,$q,$scope){

$scope.tabdata=[{
	'name':'动态',
	
	
},{
	'name':'热门',
},{
	'name':'发现'
}
]

     $http.get('data/shujidata.json',{
  }).then(function(success){
  		$scope.TCdata=success.data;
});	

   $http.get('data/remendata.json',{
  }).then(function(success){
      $scope.rmdata=success.data;
     //console.log($scope.remendata);
});
  $http.get('data/found.json',{
  }).then(function(success){
    $scope.fxdata=success.data;
    //console.log($scope.fxdata);
});
    //$scope.$apply();
  
//console.log(shoucang);
function rem(id){
	id=id+1;
	//console.log(id)
	//console.log(shoucang)
angular.forEach($scope.rmdata,function(data,index,arry){
	//console.log(parseInt(arry[index].id));
	var idx=parseInt(arry[index].id);
		//console.log(idx);
	if (id===idx) {
		//console.log(arry[index].id);
		//console.log(arry[index].state)
		if (shoucang.rmdata!='') {
			for(var i=0; i<shoucang.rmdata.length;i++){
				if (shoucang.rmdata[i].id!==arry[index].id && arry[index].state!==1 ) {
				
				shoucang.rmdata.push(arry[index]);
				arry[index].state=1;

				//console.log(arry[index])	
				//console.log(shoucang.rmdata);
				}else{
					break;
				}
					
			}
				}else{
			shoucang.rmdata.push(arry[index]);
			//console.log(4);	
			//console.log(shoucang.rmdata);
		}
    
	}
	
//console.log(shoucang.rmdata);
//console.log(shoucang.rmdata);	
})
}

$scope.tabc=function(idx){
	//console.log(idx);
	$scope.act=idx;
	//console.log($scope.act);
	$scope.path='image/星.png';
	rem(idx);
	//event.stopPropagation();
}
$scope.pushB=function(idx,event){
$scope.clied=idx;
//console.log($event)
event.stopPropagation();
}
$scope.cbox=function(event){
	 $scope.sled=-1;
	//console.log(event);
	event.stopPropagation();
	//console.log(8);
}
$scope.dtcli=function(id,event){
    $scope.sled=id
    //console.log( $scope.sled)
	 event.stopPropagation();
}
$scope.inter=function(){
  //console.log(5);
  $scope.sled=-1;
  //$scope.tg=false;
 }

function dt(id){
	//id=id+1;
	//console.log(id)
	//console.log(shoucang)
angular.forEach($scope.TCdata,function(data,index,arry){
	//console.log(parseInt(arry[index].id));
	var idx=parseInt(arry[index].id);
		//console.log(idx);
	if (id===idx) {
		//console.log(arry[index].id);
		//console.log(arry[index].state)
		if (shoucang.dtdata!='') {
			for(var i=0; i<shoucang.dtdata.length;i++){
				if (shoucang.dtdata[i].id!==arry[index].id && arry[index].state!==1 ) {
				
				shoucang.dtdata.push(arry[index]);
				arry[index].state=1;
				//console.log(arry[index])	
				//console.log(shoucang.dtdata);
				}else{
					break;
				}
					
			}
				}else{
			shoucang.dtdata.push(arry[index]);
			//console.log(4);	
			//console.log(shoucang.dtdata);
		}
    
	}
	
//console.log(shoucang.rmdata);
//console.log(shoucang.rmdata);	
})
}

 $scope.fly=function(id){
 	//console.log(id);
 	dt(id);
 	 $scope.sled=-1;
 }
//$scope.text='gfdfdfdfdfdf';
}]);
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
'use strict';
angular.module('app').directive('appTab', [function(){
  return {
    restrict: 'A',
    replace: true,
    
    templateUrl: 'view/template/apptab.html'

  };
}]);
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
'use strict';
angular.module('app').directive('appContent', [function(){
  return {
    restrict: 'A',
    replace: true,
    templateUrl: 'view/template/content.html',
  };
}]);
'use strict';
angular.module('app').directive('appCourse', [function(){
  return {
    restrict: 'A',
    replace: true,
    templateUrl: 'view/template/course.html',
  };
}]);

'use strict';
angular.module('app').directive('appNav', [function(){
  return {
    restrict: 'A',
    replace: true,
    templateUrl: 'view/template/nav.html',
  };
}]);
'use strict';
angular.module('app').directive('appPldata', [function(){
  return {
    priority:0,
    restrict: 'A',
    replace: true,
    scope:{
    	bookdata:'=',
    	filterObj:'=',
    	order:'=',
        orderlx:'=',
    },
    templateUrl: 'view/template/pldata.html',
    link:function($scope,element,attr){ 
    }
   
  };
}]);
'use strict';
angular.module('app').directive('appPushbox', ['$animate',function($animate){
  return {
    restrict: 'A',
    replace: true,
    scope:{
    	hide:'=',
    	isClick:'&'
    },
    templateUrl: 'view/template/pushbox.html'
  };
}]);
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
'use strict';
angular.module('app').directive('appTop', [function(){
  return {
    restrict: 'A',
    replace: true,
    templateUrl: 'view/template/top.html',
  };
}]);
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
'use strict';
angular.module('app').filter('filterByObj', [function(){
  return function(list, obj) {

    var result = [];
    angular.forEach(list, function(item){
      var isEqual = true;
     // console.log(item.positionList.newprice)
      for(var e in obj){
        if(item[e]!==obj[e]) {

          isEqual = false;
        }
      }
      if(isEqual) {
        result.push(item);
      // console.log(result);
      }
    });
    return result;
  };
}]);

'use strict';
angular.module('app').filter('filterpx', [function(){
  return function(list,obj,px) {
    var result;
    angular.forEach(list, function(data,index,arry){
    	aa(0);
    	function aa(n){
    		for(var item in data.positionList){
    		if (obj===item) {
    			if (n>=list.length-1) {
    				return;
    			};
    			if (px=='des') {
    	if(arry[n].positionList[obj]>arry[n+1].positionList[obj]){
    			var temp=arry[n+1];
    		    arry[n+1]=arry[n];
    		    arry[n]=temp;
    		}
    			}else{
   if(arry[n].positionList[obj]<arry[n+1].positionList[obj]){
    			var temp=arry[n+1];
    		    arry[n+1]=arry[n];
    		    arry[n]=temp;
    		}
    			}
		      }
		}
		 if (n<=list.length-1) {
		return aa(n+1);
		};
    	}
    	if (index==5) {
    		result=arry;
    		//console.log(result)
    	};
    })
    return result;
}
}]);

'use strict';
angular.module('app').service('shoucang', [function(){
   this.rmdata=[];
  this.dtdata=[];
  this.purchasingpage;
}]);