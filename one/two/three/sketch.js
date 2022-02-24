function setup() {
  createCanvas(windowWidth, windowHeight);
  background('#00FF7F');
  frameRate(20);
  noFill();
}

function draw() {
  stroke('#008080');
  ellipse(windowWidth/4, windowHeight/4, frameCount*5%700);
  if(frameCount*5%700 == 0) {
    background('#40E0D0');
  }
}
