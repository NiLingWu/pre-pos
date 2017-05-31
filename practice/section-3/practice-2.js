'use strict';

function createUpdatedCollection(collectionA, objectB) {
  objectB.value.forEach((b)=>{
    collectionA.forEach((a)=>{
      if(a.key === b)
      {
        if(a.count>=3) {
          var i;
          i =a.count/3;
          var j = parseInt(i);
          a.count -= j;
        }
      }
    });
  });
  return collectionA;
}
