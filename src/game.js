var pW = 30;
var pH = 10;
var floor_height = 20;
var canvasW = 700;
var canvasH = 500;
var margin = 20;
var max_x = (canvasW) / 2 - margin - pW;
var max_y = (canvasH - floor_height) / 2 - margin - pH;
// var max_x = (canvasW) - 2 * margin - pW;
// var max_y = (canvasH) - 2 * margin - pH;

Crafty.init(canvasW,canvasH, document.getElementById('game'));
// Crafty.e('2D, DOM, Color').attr({x: 0, y: 0, w: 100, h: 100}).color('#F00');
var floor = Crafty.e('Floor, 2D, Canvas, Color');
floor.attr({
  x: 0,
  y: canvasH - floor_height,
  w: canvasW,
  h: floor_height
}).color('green').origin('center');

function get_coor(max_val, trans){
  return Math.floor(Math.random() * max_val) + (trans * max_val);
}


var timeEnt = Crafty.e("2D, DOM, Text")
  .attr({x: 10, y: 10, w: 50, h: 50, color:'red'})
  .text=('Seconds Left: 30'),
  time = 30;


var flea = Crafty.e('2D, Canvas, Color, Twoway, Gravity, EnterFrame');
flea.attr({
  x: 0,
  y: 300,
  w: 4,
  h: 4
}).color('#F00').twoway(150, 220).gravity('Floor');

flea.bind('EnterFrame', function(){
  time -= 1;
  timeEnt.text = ('Seconds Left: '+time);
});

var Ad = Crafty.e('2D, Canvas, Color, Floor');
Ad.attr({
  x: get_coor(max_x, 1),
  y: get_coor(max_y, 1),
  w: pW,
  h: pH
}).color('orange');

var Aa = Crafty.e('2D, Canvas, Color, Floor');
Aa.attr({
  x: 295,
  y: 240,
  w: 10,
  h: 10
}).color('blue');

var Ab = Crafty.e('2D, Canvas, Color, Floor');
Ab.attr({
  x: 160,
  y: 218,
  w: 10,
  h: 10
}).color('green');

var Ac = Crafty.e('2D, Canvas, Color, Floor');
Ac.attr({
  x: 200,
  y: 274,
  w: 30,
  h: 10
}).color('red');