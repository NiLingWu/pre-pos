/**
 * Created by wupc on 2017/5/31.
 */
//test1
var a = 'h[10]';
var b =[];
if(a.match(/\[/))
{
  b[0] = a.split(/\[/)[0];
  b[1] = a.split(/\[/)[1];
  if(b[1].match(/\]/))
  {
    b[1] =b[1].split(/\]/);
  }
}
console.log(b);
//test2
var c = 'h[10]';
var d =[];
if(c.match(/\[/))
{
  d[0] = c.split(/\[/)[0];
  d[1] = c.split(/\[/)[1];
  if(d[1].match(/\]/))
  {
    d[1] =d[1].split(/\]/)[0];
  }
}
console.log(d);
