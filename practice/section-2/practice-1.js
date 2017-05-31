'use strict';

function countSameElements(collection) {
   var array = [];
   collection.forEach((c)=> {
     var entry = array.findIndex((a)=> {
      return a.key === c;
    });
    if (entry !== -1) {
      array[entry].count++;
    }
    else {
      array.push({key: c, count: 1});
    }
  });
  return array;
}
