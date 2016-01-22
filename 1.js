'use strict';

function tripleEachElement(array) {
	var tripledList = [];
	array.forEach(function(num) {
    var tripledNum = num*3
    tripledList.push(tripledNum);
   });
  return tripledList;
}






console.log(tripleEachElement([4, 6, 3, 2])); // [12, 18, 9, 6]
