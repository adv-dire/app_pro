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
