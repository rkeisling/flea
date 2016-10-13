Crafty.init(500,350, document.getElementById('game'));
// Crafty.e('2D, DOM, Color').attr({x: 0, y: 0, w: 100, h: 100}).color('#F00');
var floor = Crafty.e('Floor, 2D, Canvas, Color');
floor.attr({
  x: 0,
  y: 330,
  w: 500,
  h: 20
}).color('green');
var block = Crafty.e('2D, Canvas, Color, Twoway, Gravity');
block.attr({
  x: 0,
  y: 0,
  w: 3,
  h: 3
}).color('#F00').twoway(100).gravity('Floor');
// floor.bind('EnterFrame', function(){
//   this.rotation = this.rotation + .1;
// });
floor.origin('center');
var piece = Crafty.e('2D, Canvas, Color, Floor');
piece.attr({
  x: 290,
  y: 240,
  w: 10,
  h: 10
}).color('blue');

var piece2 = Crafty.e('2D, Canvas, Color, Floor');
piece2.attr({
  x: 160,
  y: 220,
  w: 10,
  h: 10
}).color('blue');

var piece3 = Crafty.e('2D, Canvas, Color, Floor');
piece3.attr({
  x: 200,
  y: 280,
  w: 30,
  h: 10
}).color('red');
