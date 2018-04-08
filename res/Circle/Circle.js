var Diam1 = new Array(20);
var Diam2 = new Array(20);
var CirX = new Array(20);
var CirY = new Array(20);

function setup() {
  createCanvas(640, 480);
  frameRate(10);

  for (var i=0; i<20; i++) {
    Diam1[i] = random(60);
    Diam2[i] = random(60);
    CirX[i] = random(width);
    CirY[i] = random(height);
  }
}

function draw() {
  background(180);
  noFill();
  strokeWeight(2);

  for (var i=0; i<20; i++) {
    ellipse(CirX[i], CirY[i], Diam1[i], Diam2[i]);
    Diam1[i] += random(-10, 10);
    Diam2[i] += random(-10, 10);
    Diam1[i] %= width;
    Diam2[i] %= height;
  }
}