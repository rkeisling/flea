// how many blocks in each of the six sections of the game
var population = 16;
// width of each block
var pW = 4;
// height of each block
var pH = 10;
var floor_height = 20;
var canvasW = 1000;
var canvasH = 500;
// how far from the edge blocks can generate
var margin = 10;
// max_x and max_y determine the sections
var max_x = (canvasW) / 2 - margin - pW;
var max_y = (canvasH - floor_height) / 3 - margin - pH;
// colors that blocks can be, randomly chosen
var colors = ['red', 'blue', 'green', 'purple', 'yellow', 'orange', 'white'];

// initializes canvas on which the game is played
Crafty.init(canvasW,canvasH, document.getElementById('game'));


// gets x and y coordinates for random block placement
function get_coor(max_val, trans){
  return Math.floor(Math.random() * max_val) + (trans * max_val);
}
// makeBlocks makes all the random blocks
// pop_change is a change from the population that you want in a certain section
// so if you want half as many blocks in the middle section, you'd change pop_change
// to -8 in 0,1 and 1,1
function makeBlocks(section_x, section_y, pop_change) {
  var blocks = new Array(population);
  for (x=0; x<population+pop_change; x++) {
    blocks[x] = Crafty.e('2D, Canvas, Color, Floor')
    .attr({x: get_coor(max_x, section_x), y: get_coor(max_y, section_y), w: pW, h: pH})
    .color(colors[Math.floor(Math.random()*colors.length)]);
  };
  return blocks
}
// these make all the random blocks in the game
makeBlocks(0,0,0);
makeBlocks(0,1,0);
makeBlocks(0,2,0);
makeBlocks(1,0,0);
makeBlocks(1,1,0);
makeBlocks(1,2,0);

// Aa, Ab, and Ac make the three set blocks at the bottom, for ease of access
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

var Ac = Crafty.e('2D, Canvas, Color, Floor, Gravity');
Ac.attr({
  x: canvasW/3 * 2,
  y: canvasH - 70,
  w: pW,
  h: pH
}).color('red');


// makes the floor, pretty important
var floor = Crafty.e('Floor, 2D, Canvas, Color');
floor.attr({
  x: 0,
  y: canvasH - floor_height,
  w: canvasW,
  h: floor_height
}).color('green').origin('center');


// this is the block one must reach in order to win and is random
var winBlock = Crafty.e('2D, Canvas, Color, Floor');
winBlock.attr({
  x: get_coor(canvasW - margin, 0),
  y: 15,
  w: pW * 6,
  h: 1
}).color('black');


// this is the actual gamepiece, the twoway parameters are left/right speed and
// jump speed in pixels per second, respectively
var flea = Crafty.e('2D, Canvas, Color, Twoway, Gravity, EnterFrame');
flea.attr({
  x: (canvasW/2) + 1,
  y: canvasH - 50,
  w: 4,
  h: 4
}).color('#F00').twoway(150, 220).gravity('Floor');


// from here to initializeClock is a bunch of stuff for the timer
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
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2) + ':';
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2) + ' remaining';

    if (t.minutes <= 0 & t.seconds <= 0) {
      clearInterval(timeinterval);
    }
    else if (t.minutes < 1) {
      clockdiv.style.backgroundColor = 'red';
    }
  }
  updateClock();
  var timeinterval = setInterval(updateClock, 1000);

}
var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
initializeClock('clockdiv', deadline);





// this function checks to see where the flea is and is called in the updateClock
// function every 0.5 seconds
function isWinning(){
  var space = document.getElementById('coordinates');
  var winning = space.querySelector('.winning');
  var flea_x = Math.floor(flea.x);
  var flea_y = Math.floor(flea.y);
  var win_y = Math.floor(winBlock.y);
  var win_x = Math.floor(winBlock.x);
  var win_w = winBlock.w;
  if ((win_x < flea_x && flea_x < (win_x + win_w)) && (win_y > flea_y && flea_y > (win_y - 5))) {
    winning.innerHTML = "Hey, looks like you win. Accidents happen, I guess. You can refresh the page to play again!";
  }
  else if (flea_y > (canvasH/6)*5) {
    winning.innerHTML = "You're not even trying!";
  }
  else if (flea_y > (canvasH/6)*4) {
    winning.innerHTML = "That's hardly impressive.";
  }
  else if (flea_y > (canvasH/6)*3) {
    winning.innerHTML = "What's wrong? Scared of heights?";
  }
  else if (flea_y > (canvasH/6)*2) {
    winning.innerHTML = "Watch your step up there...";
  }
  else if (flea_y > (canvasH/6)*1) {
    winning.innerHTML = "You won't ever make it.";
  }
  else if (flea_y < 0) {
    winning.innerHTML = "Hey, get down from up there.";
  }
  else if (flea_x < 0) {
    winning.innerHTML = 'Great job, you fell off the map.'
  }
  else {
    winning.innerHTML = "You're kind of a big deal.";
  }
}
function drop_block() {
  block2drop = blocks[Math.floor(Math.random()*blocks.length)];
  block2drop.gravity('Floor')
}
