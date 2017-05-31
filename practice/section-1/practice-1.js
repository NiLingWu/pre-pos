'use strict';

function collectSameElements(collectionA, collectionB) {
  var collection = [];
  collectionA.forEach((a)=>{
    collectionB.forEach((b)=>{
      if (a === b) collection.push(a);
    })
  });
  return collection;
}
