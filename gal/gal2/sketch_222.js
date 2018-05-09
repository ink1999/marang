var img1, img2, img3;
var xPos = new Array(20);
var yPos = new Array(20);
var xDir = new Array(20);
var yDir = new Array(20);
var brush = 0;
var scene = 1;

function preload() {
  img1 = loadImage("1.jpg");
}

function setup() {
  createCanvas(480, 640);
  frameRate(200);

  for (var i=0; i<20; i++) {
    xPos[i] = random(480);
    yPos[i] = random(640);

    xDir[i] = random(10);
    yDir[i] = random(10);
  }
}

function draw() {
  noStroke();
  if ( scene == 1) {
    for (var i=0; i<20; i++) {
      fill(img1.get(xPos[i], yPos[i]));
      ellipse(xPos[i], yPos[i], 5+brush, 5+brush);
      xPos[i] = xPos[i] + xDir[i];
      yPos[i] = yPos[i] + yDir[i];

      if ( xPos[i] < 0 ) {
        xDir[i] *= -1;
      }

      if ( yPos[i] < 0 ) {
        yDir[i] *= -1;
      }

      if ( xPos[i] > width ) {
        xDir[i] *= -1;
      }

      if ( yPos[i] > height ) {

        yDir[i] *= -1;
      }
    }
  }

  if ( scene == 2) {
    for (var i=0; i<20; i++) {
      fill(img1.get(xPos[i], yPos[i]));
      rect(xPos[i], yPos[i], 5+brush, 5+brush);
      xPos[i] = xPos[i] + xDir[i];
      yPos[i] = yPos[i] + yDir[i];

      if ( xPos[i] < 0 ) {
        xDir[i] *= -1;
      }

      if ( yPos[i] < 0 ) {
        yDir[i] *= -1;
      }

      if ( xPos[i] > width ) {
        xDir[i] *= -1;
      }
      if ( yPos[i] > height ) {

        yDir[i] *= -1;
      }
    }
  }
}

function mouseClicked() {
  scene++;
  if ( scene > 2 ) scene = 1;
}
function keyPressed() {
  if (keyCode === UP_ARROW) brush += 3;
  if (keyCode === DOWN_ARROW) brush -= 3;
}
