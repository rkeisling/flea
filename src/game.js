var population = 15;
var pW = 5;
var pH = 10;
var floor_height = 20;
var canvasW = 1000;
var canvasH = 500;
var margin = 20;
var max_x = (canvasW) / 2 - margin - pW;
var max_y = (canvasH - floor_height) / 3 - margin - pH;
// var max_x = (canvasW) - 2 * margin - pW;
// var max_y = (canvasH) - 2 * margin - pH;

var colors = ['red', 'blue', 'green', 'purple', 'yellow', 'orange']

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

function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  return {
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.seconds <= 0) {
      clearInterval(timeinterval);
    }
  }


  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
initializeClock('clockdiv', deadline);

var Ad = Crafty.e('2D, Canvas, Color, Floor');
Ad.attr({
  x: get_coor(max_x, 1),
  y: get_coor(max_y, 1),
  w: pW,
  h: pH
}).color(colors[Math.floor(Math.random()*colors.length)]);

for (x=0; x<population; x++) {
  var Ad = Crafty.e('2D, Canvas, Color, Floor');
  Ad.attr({
    x: get_coor(max_x, 1),
    y: get_coor(max_y, 1),
    w: pW,
    h: pH
  }).color(colors[Math.floor(Math.random()*colors.length)]);
};

for (x=0; x<population; x++) {
  var Ad = Crafty.e('2D, Canvas, Color, Floor');
  Ad.attr({
    x: get_coor(max_x, 0),
    y: get_coor(max_y, 0),
    w: pW,
    h: pH
  }).color(colors[Math.floor(Math.random()*colors.length)]);
};

for (x=0; x<population; x++) {
  var Ad = Crafty.e('2D, Canvas, Color, Floor');
  Ad.attr({
    x: get_coor(max_x, 0),
    y: get_coor(max_y, 1),
    w: pW,
    h: pH
  }).color(colors[Math.floor(Math.random()*colors.length)]);
};

for (x=0; x<population; x++) {
  var Ad = Crafty.e('2D, Canvas, Color, Floor');
  Ad.attr({
    x: get_coor(max_x, 1),
    y: get_coor(max_y, 0),
    w: pW,
    h: pH
  }).color(colors[Math.floor(Math.random()*colors.length)]);
};

for (x=0; x<population; x++) {
  var Ad = Crafty.e('2D, Canvas, Color, Floor');
  Ad.attr({
    x: get_coor(max_x, 1),
    y: get_coor(max_y, 2),
    w: pW,
    h: pH
  }).color(colors[Math.floor(Math.random()*colors.length)]);
};

for (x=0; x<population; x++) {
  var Ad = Crafty.e('2D, Canvas, Color, Floor');
  Ad.attr({
    x: get_coor(max_x, 0),
    y: get_coor(max_y, 2),
    w: pW,
    h: pH
  }).color(colors[Math.floor(Math.random()*colors.length)]);
};

var Aa = Crafty.e('2D, Canvas, Color, Floor');
Aa.attr({
  x: canvasW/3,
  y: canvasH - 70,
  w: pW,
  h: pH
}).color('blue');

var Ab = Crafty.e('2D, Canvas, Color, Floor');
Ab.attr({
  x: canvasW/2,
  y: canvasH - 70,
  w: pW,
  h: pH
}).color('green');

var Ac = Crafty.e('2D, Canvas, Color, Floor');
Ac.attr({
  x: canvasW/3 * 2,
  y: canvasH - 70,
  w: pW,
  h: pH
}).color('red');
