'use strict';

function collectSameElements(collectionA, objectB) {
  var collection = [];
  collectionA.forEach((a)=>objectB.value.forEach((b)=>{
    if(a==b)collection.push(a);
  }));
  return collection;
}
