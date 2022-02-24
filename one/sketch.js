function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  frameRate(10);
  noFill();
  
}

function draw() {
  stroke('red');
  ellipse(windowWidth/2, windowHeight/2, frameCount*5%700);
  if(frameCount*5%700 == 0) {
    background(0);
  }
  
  

  

}
