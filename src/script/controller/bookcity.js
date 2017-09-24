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