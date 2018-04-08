var Diam1 = new Array(10);
var Diam2 = new Array(10);
var cx = new Array(10);
var cy = new Array(10);

function setup() {
  createCanvas(640, 480);
  frameRate(10);

  for (var i=0; i<10; i++) {
    Diam1[i] = random(60);
    Diam2[i] = random(60);
    cx[i] = random(640);
    cy[i] = random(480);
  }
}

function draw() {
  stroke(0);
  strokeWeight(2);
  background(180);
  noFill();

  for (var i=0; i<10; i++) {
    ellipse(cx[i], cy[i], Diam1[i], Diam2[i]);
    Diam1[i] += random(-10, 10);
    Diam2[i] += random(-10, 10);
  }
}