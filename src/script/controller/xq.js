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