var population = 16;
var pW = 5.5;
var pH = 10;
var floor_height = 20;
var canvasW = 1000;
var canvasH = 500;
var margin = 10;
var max_x = (canvasW) / 2 - margin - pW;
var max_y = (canvasH - floor_height) / 3 - margin - pH;

var colors = ['red', 'blue', 'green', 'purple', 'yellow', 'orange']

Crafty.init(canvasW,canvasH, document.getElementById('game'));
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
  x: (canvasW/2) + 1,
  y: canvasH - 50,
  w: 4,
  h: 4
}).color('#F00').twoway(150, 220).gravity('Floor');

function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 3);
  return {
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);
    isWinning();
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.minutes <= 0 & t.seconds <= 0) {
      clearInterval(timeinterval);
    }
    else if (t.minutes < 1) {
      minutesSpan.style.backgroundColor = 'red';
      secondsSpan.style.backgroundColor = 'red';
    }
  }
  updateClock();
  var timeinterval = setInterval(updateClock, 500);
}

var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
initializeClock('clockdiv', deadline);

function makeBlocks(section_x, section_y) {
  for (x=0; x<population; x++) {
    Crafty.e('2D, Canvas, Color, Floor')
    .attr({x: get_coor(max_x, section_x), y: get_coor(max_y, section_y), w: pW, h: pH})
    .color(colors[Math.floor(Math.random()*colors.length)]);
  };
}


makeBlocks(0,0);
makeBlocks(0,1);
makeBlocks(0,2);
makeBlocks(1,0);
makeBlocks(1,1);
makeBlocks(1,2);

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

var winBlock = Crafty.e('2D, Canvas, Color, Floor');
winBlock.attr({
  x: get_coor(canvasW - margin, 0),
  y: 15,
  w: pW * 6,
  h: 1
}).color('black');

function isWinning(){
  var space = document.getElementById('coordinates');
  var x_coor = space.querySelector('.x_coor');
  var y_coor = space.querySelector('.y_coor');
  var flea_x = Math.floor(flea.x);
  var flea_y = Math.floor(flea.y);
  var win_x = Math.floor()
  x_coor.innerHTML = flea_x + ',';
  y_coor.innerHTML = flea_y;
}
