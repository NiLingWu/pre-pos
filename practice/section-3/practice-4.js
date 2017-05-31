'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var collectionC = [];
  collectionA.forEach((a)=> {
    var entry = collectionC.findIndex((c)=> {
      return c.key === a;
    });
    if (entry === -1) {
      if(a.match('-'))
      {
        var Array = a.split('-');
        collectionC.push({key:Array[0],count:Number(Array[1])});
      }
      else
        collectionC.push({key: a, count: 1});
    }
    else {
      collectionC[entry].count++;
    }
  });
  objectB.value.forEach((b)=>{
    collectionC.forEach((c)=>{
      if(c.key === b)
      {
        if(c.count>=3) {
          var i;
          i =c.count/3;
          var j = parseInt(i);
          c.count -= j;
        }
      }
    });
  });
  return collectionC;
}
