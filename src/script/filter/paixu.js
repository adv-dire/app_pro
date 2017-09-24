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
