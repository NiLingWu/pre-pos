'use strict';

function createUpdatedCollection(collectionA, objectB) {
  objectB.value.forEach((b)=>{
    collectionA.forEach((a)=>{
      if(a.key === b)
      {
        a.count--;
      }
    });
  });
  return collectionA;
}
