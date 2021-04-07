function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 100);
  frameRate(3);
  strokeWeight(3);
  stroke(40, 40, 40);
}

function draw() {
  background(102);
  let x,y,r;
  let s = 20; // s는 quad를 구성하는 두개의 같은 정삼각형의 밑변의 2분의 1 
  rotate(mouseX / 720.0);
  
   for (y=-200 * s; y<3*windowHeight; y+=4*s) { 
      for (x=-80 * sqrt(3) * s; x<3*windowWidth; x+=2 * sqrt(3) * s) {
        let H = random(2, 9);
        let S = random(5, 10);
        let B = random(7, 9);
        let Y_multi = map(mouseY, 0, windowHeight, 5, 10);
        fill(Y_multi * H, Y_multi *S, Y_multi *B);
      quad(x, y, x + sqrt(3) * s, y - s, x + 2 * sqrt(3) * s, y, x + sqrt(3) * s, y + s);
      }
    }

  for (y=-200 * s; y<3*windowHeight; y+= 4 * s) {
    for (x=-80 * sqrt(3) * s; x<3*windowWidth; x+=2 * sqrt(3) * s) {
        let H = random(2, 9);
        let S = random(5, 10);
        let B = random(7, 9);
        let Y_multi = map(mouseY, 0, windowHeight, 5, 10);
        fill(Y_multi * H, Y_multi *S, Y_multi *B);
      quad(x, y, x + sqrt(3) * s, y + s, x + sqrt(3) * s, y + 3*s, x, y + 2 * s);
      }
    }
  for (y=-200 * s; y<3*windowHeight; y+= 4 * s) {
    for (x=-80 * sqrt(3) * s; x<3*windowWidth; x+=2 * sqrt(3) * s) {
        let H = random(2, 9);
        let S = random(5, 10);
        let B = random(7, 9);
        let Y_multi = map(mouseY, 0, windowHeight, 5, 10);
        fill(Y_multi * H, Y_multi *S, Y_multi *B);
      quad(x + sqrt(3) * s, y + s, x + 2 * sqrt(3) * s, y, x + 2 * sqrt(3) * s, y + 2 * s, x + sqrt(3) * s, y + 3 * s);   
    }
  }
  for (y=-200 * s + 3*s; y<3*windowHeight; y+= 4 * s) {
    for (x=-sqrt(3) * 81 * s; x<3*windowWidth; x+=2 * sqrt(3) * s) {
        let H = random(2, 9);
        let S = random(5, 10);
        let B = random(7, 9);
        let Y_multi = map(mouseY, 0, windowHeight, 5, 10);
        fill(Y_multi * H, Y_multi *S, Y_multi *B);
      quad(x, y, x + sqrt(3) * s, y - s, x + 2 * sqrt(3) * s, y, x + sqrt(3) * s, y + s);
      }
    }
}

function mousePressed() {
  noLoop();
}

function mouseReleased() {
  loop();
}