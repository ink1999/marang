var xPos, xDir, yPos, yDir;

function setup() {
  createCanvas(640, 480);
  xPos = 20;
  xDir = 15;
  yPos = 50;
  yDir = 5;
  
}

function draw() {
  background(180);
  noFill();
  ellipse(xPos, yPos, 20, 20);
  xPos = xPos + xDir;
  yPos = yPos + yDir;
  
  if ( xPos < 0 ) {
    xDir *= -1;
  }
  
  if ( xPos > 640) {
    xDir *= -1;
  }
  
  if ( yPos < 0 ) {
    yDir *= -1;
  }
  
  if ( yPos > 480) {
    yDir *= -1;
  }
}