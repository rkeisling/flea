Crafty.init(500,350, document.getElementById('game'));
// Crafty.e('2D, DOM, Color').attr({x: 0, y: 0, w: 100, h: 100}).color('#F00');
var floor = Crafty.e('Floor, 2D, Canvas, Color');
floor.attr({
  x: 0,
  y: 250,
  w: 500,
  h: 10
}).color('green');
var block = Crafty.e('2D, Canvas, Color, Twoway, Gravity');
block.attr({
  x: 0,
  y: 0,
  w: 50,
  h: 50
}).color('#F00').twoway(200).gravity('Floor');
block.bind('EnterFrame', function(){
  this.rotation = this.rotation + 3;
});
block.origin('center');
