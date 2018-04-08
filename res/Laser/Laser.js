function setup() {
  createCanvas(500, 500);
  frameRate(15);
}

function draw() {
  background(0);
  strokeWeight(5);
  noFill();
  
  stroke(random(255), 0, 0);
  line(0, 0, random(249), 499);
  
  stroke(0, random(255), 0);
  line(0, 499, 499, 499-random(249));
  
  stroke(0, 0, random(255));
  line(499, 499, 499-random(249), 0);
  
  stroke(255, 255, 255);
  line(499, 0, 0, random(249));
  
  strokeWeight(2);
  for(var x=100; x<400; x+=15) {
    for(var y=100; y<400; y+=15) {
      quad(x, y, x+random(10), y+random(10), x+random(10), y+random(10), x+random(10), y+random(10));
    }
  }
}