var xPos = new Array(10);
var yPos = new Array(10);
var xDir = new Array(10);
var yDir = new Array(10);

function setup() {
  createCanvas(640, 480);

  for (var i=0; i<10; i++) {
    xPos[i]=random(470);
    yPos[i]=random(470);
    xDir[i]=random(20);
    yDir[i]=random(20);
  }
}

function draw() {
  background(200);
  noFill();

  for (var i=0; i<10; i++) {
    ellipse(xPos[i], yPos[i], 20, 20);
    xPos[i] = xPos[i] + xDir[i];
    yPos[i] = yPos[i] + yDir[i];

    if ( xPos[i] < 20) {
      xDir[i] *= -1;
    }

    if ( yPos[i] < 20 ) {
      yDir[i] *= -1;
    }

    if ( xPos[i] > width-20 ) {
      xDir[i] *= -1;
    }

    if (yPos[i] > height-20) {
      yDir[i] *= -1;
    }
  }
}