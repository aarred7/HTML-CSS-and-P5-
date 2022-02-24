function setup() {
  createCanvas(windowWidth, windowHeight);
  background('#FFE4E1');
  frameRate(15);
  noFill();
}

function draw() {

  stroke('#C71585');
  ellipse(windowWidth*3/4, windowHeight*3/4, frameCount*5%700);
    if(frameCount*5%700 == 0) {
      background('#CD5C5C');
      
    }
  
}
