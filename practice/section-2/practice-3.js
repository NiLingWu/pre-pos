'use strict';

function fenjie(element) {
  var Element = ['key', 0];
  if (element.match('-')) {
    Element = element.split('-');
  }
  else if (element.match(':')) {
    Element = element.split(':');
  }
  else if (element.match(/\[/)) {
    Element[0] = element.split(/\[/)[0];
    Element[1] = element.split(/\[/)[1].split(/\]/)[0];
  }
  else {
    Element[0] = element;
    Element[1] = 1;
  }
  Element[1] = Number(Element[1]);
  return Element;
}

function countSameElements(collection) {
  var array = [];
  collection.forEach((e)=> {
    var Element = fenjie(e);
    var entry = array.findIndex((a)=>{
      Element = fenjie(e);
      return a.name === Element[0];
    });

    if (entry === -1) {
      array.push({name: Element[0], summary: Element[1]});
    }
    else {
      array[entry].summary += Element[1];
    }
  });
  return array;
}

