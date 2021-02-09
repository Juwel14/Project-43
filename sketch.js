// Creating variables
var hr, min, sec
var hr1, min1, sec1;

function setup() 
{
  // Creating the size of the canvas
  createCanvas(800, 400);

  // Changing the angle mode to degrees to measure angle in degrees
  angleMode(DEGREES);
}

function draw() 
{
  // Setting color for the background
  background(0);  

  // Setting the position for the clock
  translate(200, 200);

  // rotating the hands
  rotate(-90);

  // Calculating time using predefined function from p5.js
  hr = hour();
  min = minute();
  sec = second();
  
  // Computing the angle for second, minute and hour hands
  secAngle = map(sec, 0, 60, 0, 360);
  minAngle = map(min, 0, 60, 0, 360);
  hrAngle = map(hr % 12, 0, 12, 0, 360);

  // Creating second hand
  push();
  rotate(secAngle);
  stroke("red");
  strokeWeight(7);
  line(0, 0, 100, 0);
  pop();

  // Creating minute hand
  push();
  rotate(minAngle);
  stroke("lime");
  strokeWeight(7);
  line(0, 0, 75, 0);
  pop();

  // Creating hour hand
  push();
  rotate(hrAngle);
  stroke("blue");
  strokeWeight(7);
  line(0, 0, 50, 0);
  pop();

  // Creating point
  stroke(255, 0, 255);
  point(0, 0);
  strokeWeight(10);
  noFill();

  // Creating arc for second hand
  stroke("red");
  arc(0, 0, 300, 300, 0, secAngle);

  // Creating arc for minute hand
  stroke("lime");
  arc(0, 0, 280, 280, 0, minAngle);

  // Creating arc for hour hand
  stroke("blue");
  arc(0, 0, 260, 260, 0, hrAngle);
}