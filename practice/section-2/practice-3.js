'use strict';

function countSameElements(collection) {
  var array = [];
  //将每一个元素都以[‘元素’，数量]表示
  collection.forEach((e)=> {
    var E = ['key', 0];
    if (e.match('-')) {
      E = e.split('-');
    }
    else if (e.match(':')) {
      E = e.split(':');
    }
    else if (e.match(/\[/)) {
      E[0] = e.split(/\[/)[0];
      E[1] = e.split(/\[/)[1];
      if(E[1].match(/\]/))
       {
         E[1] = E[1].split(/\]/)[0] ;
       }
    }
    else {
      E[0] = e;
      E[1] = 1;
    }
    E[1] = Number(E[1]);
    //寻找有没有与其相同元素的索引号，返回索引号
    var entry = array.findIndex((a)=>{
      return a.name === E[0];
    });

    if (entry === -1) {
      array.push({name: E[0], summary: E[1]});
    }
    else {
      array[entry].summary += E[1];
    }
  });
  return array;
}

