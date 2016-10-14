Crafty.init(1250,500, document.getElementById('game'));
// Crafty.e('2D, DOM, Color').attr({x: 0, y: 0, w: 100, h: 100}).color('#F00');
var floor = Crafty.e('Floor, 2D, Canvas, Color');
floor.attr({
  x: 0,
  y: 480,
  w: 1250,
  h: 20
}).color('green').origin('center');

// var timer = Crafty.e('2D, Canvas, Color');
// timer.attr({
//   x: 470,
//   y: 20,
//   w: 20,
//   h: 20,
//   seconds_left: 30,
//   interval: setInterval(function() {
//       timer = -- this.seconds_left;
//
//       if (seconds_left <= 0)
//       {
//           timer = 'You lose';
//           clearInterval(interval);
//       }
//   }, 1000)
// }).color('green');

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
}).color('#F00').twoway(150, 500).gravity('Floor');

flea.bind('EnterFrame', function(){
  time -= 1;
  timeEnt.text = ('Seconds Left: '+time);
});

// floor.bind('EnterFrame', function(){
//   this.rotation = this.rotation + .1;
// });

var piece = Crafty.e('2D, Canvas, Color, Floor');
piece.attr({
  x: 295,
  y: 240,
  w: 10,
  h: 10
}).color('blue');

var piece2 = Crafty.e('2D, Canvas, Color, Floor');
piece2.attr({
  x: 160,
  y: 218,
  w: 10,
  h: 10
}).color('green');

var piece3 = Crafty.e('2D, Canvas, Color, Floor');
piece3.attr({
  x: 200,
  y: 274,
  w: 30,
  h: 10
}).color('red');

// button.bind('click', function(){
//   Crafty.pause();
// });
