'use strict';

function collectSameElements(collectionA, collectionB) {
  var collection = [];
  collectionA.forEach((a)=>{
    collectionB.forEach((b)=>b.forEach((bz)=>{
      if (a === bz) collection.push(a);
    }))
  });
  return collection;
 // return '实现练习要求，并改写该行代码。';
}
