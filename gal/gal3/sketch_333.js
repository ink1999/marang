var img1, img2, img3;
var scene = 1;
var v1 = 0;
var v2 = 0;
var v3 = 0;
var v4 = 0;

function preload() {
  img1 = loadImage("1.jpg");
  img2 = loadImage("2.jpg");
  img3 = loadImage("3.jpg");
}

function setup() {
  createCanvas(480, 640);
}

function draw() {
  background(0);
  
  if (scene == 1) {
    image(img1, 0, 0);
    filter(POSTERIZE, 3);
    tint(v1, v2, v3, v4);
  }
  if (scene == 2) {
    image(img2, 0, 0);
    filter(POSTERIZE, 3);
    tint(v1, v2, v3, v4);
  }
  if (scene == 3) {
    image(img3, 0, 0);
    filter(POSTERIZE, 3);
    tint(v1, v2, v3, v4);
  }
}


function mousePressed() {
  v1 = random(155, 255);
  v2 = random(155, 255);
  v3 = random(155, 255);
  v4 = random(155, 255);
}

function keyTyped() {
  if (key === '1') scene = 1;
  if (key === '2') scene = 2;
  if (key === '3') scene = 3;
}
  
