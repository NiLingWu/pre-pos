'use strict';

function countSameElements(collection) {
  var array = [];
  collection.forEach((c)=> {
    var entry = array.findIndex((a)=> {
      return a.key === c;
    });
    if (entry === -1) {
      if(c.match('-'))
      {
        var Array = c.split('-');
        array.push({key:Array[0],count:Number(Array[1])});
      }
      else
        array.push({key: c, count: 1});
    }
    else {
      array[entry].count++;
    }
  });
  return array;
}
