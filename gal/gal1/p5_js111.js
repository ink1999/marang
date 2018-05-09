var bDragged;
var angle = 0;
var x = 200;
var y = 200;
var brush = 0;
var brushSize = 0;
var size = 0.05;
var sizeSpeed = 0.10;
var img;

function preload() {
  img = loadImage('2.jpg');
}


function setup() {
  frameRate(300);
  createCanvas(527, 412);
  background(0);
  rectMode(CENTER);
}

void draw() 
{
  noFill();
  rect(width/2, height/2, width, height);

  fill(img.get(mouseX, mouseY));

  if (bDragged) 
  {
    angle += 4;
    translate(mouseX, mouseY);
    rotate(radians(angle));
    if ( brush == 0 ) 
    {
      noStroke();
      rect(0, 0, 20+brushSize, 20+brushSize);
    }
    else if ( brush == 1 ) 
    {
      noStroke();
      rect(0, 0, 40+brushSize, 5+brushSize);
    }
    else if ( brush ==2 )
    {
      size += sizeSpeed;
      if(size > 3.0 || size < 0.1 ) 
      {
        sizeSpeed = -sizeSpeed;
      }
      scale(size);
      noStroke();
      ellipse(0, 0, 30+brushSize, 30+brushSize);
    }
    bDragged = false;
  }
}

function touchStarted() 
{
  bDragged = true;
}

function keyPressed()
{
  if(key == 'd' || key == 'D') {background(0);}
  if(key == '1' || key == '!') {brush = 0;}
  if(key == '2' || key == '!') {brush = 1;}
  if(key == '3' || key == '!') {brush = 2;}
  if(key == '+') {brushSize += 3;}
  if(key == '-') {brushSize -= 3;}
  
}
