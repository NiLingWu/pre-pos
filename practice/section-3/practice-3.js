'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var collectionC = [];
  collectionA.forEach((a)=> {
    var entry = collectionC.findIndex((c)=> {
      return c.key === a;
    });
    if (entry !== -1) {
      collectionC[entry].count++;
    }
    else {
      collectionC.push({key: a, count: 1});
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
