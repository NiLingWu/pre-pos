'use strict';

function collectSameElements(collectionA, objectB) {
  var array = [];
  collectionA.forEach((a)=>objectB.value.forEach((b)=>{
    if(b ===a.key)array.push(b);
  }));
  return array;
}
