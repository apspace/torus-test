let offset = 0;
let r0, r1, k = 0;
let r0_slider, r1_slider, k_slider;
let r0_val, r1_val, k_val;

function setup(){
  canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.position(0, 0);
  canvas.style('z-index', ' -1');
  canvas.style('position', 'absolute');
  angleMode(DEGREES);
  // colorMode()
  // stroke(50);
  // strokeWeight(3);
  stroke(0);
  // fill(255,255,0);

  //
  // r0_val = createDiv();
  // r0_slider = createSlider(0, 200, 130, 1);
  //
  // r1_val = createDiv();
  // r1_slider = createSlider(0, 200, 80, 1);

  // k_val = createDiv();
  // k_slider = createSlider(0 ,10 ,3 ,1 );

}

function draw(){
  background(0);
  // orbitControl(8,8);
  rotateX(-25);
  // rotateX(offset);
  rotateY(-offset);
  rotateZ(offset);
  let d1 = dist(mouseX, 0, windowWidth/2, 0);
  let d2 = dist(mouseY, 0, windowHeight/2, 0)
  r0 = map(d1, 0 , windowWidth/2, 0, 300);
  r1 = map(d2, 0, windowHeight/2, 0, 300);


  toroidalSpiral(r0, r1, k);
  // toroidalTorus(r0, r1);


  offset += 0.8;

  // r0_val.html("radius 0: " + r0_slider.value());
  // r1_val.html("radius 1: " + r1_slider.value());
  // k_val.html("k: " + k_slider.value());

}

//   function keyPressed() {
//   if (keyCode === LEFT_ARROW) {
//     k += -1;
//   } else if (keyCode === RIGHT_ARROW) {
//     k += 1;
//   }
// }

function mousePressed() {
  if (mouseButton === LEFT) {
  k += 1;
  }
  if (mouseButton === RIGHT) {
  k += -1;
  }
}

function toroidalTorus(r0, r1) {
  strokeWeight(3);
  stroke(100);
  for(let theta = 0; theta < 360; theta += 8){
    beginShape(POINTS);
    for(let phi = 0; phi < 360; phi += 8){
      let x = (r0 + r1 * cos(phi+offset)) * sin(theta);
      let y = r1 * sin(phi+offset);
      let z = (r0 + r1 * cos(phi+offset)) * cos(theta);
      vertex(x,y,z);
    }
    endShape();
  }
}

function toroidalSpiral(r0, r1, k) {
  strokeWeight(10);
  stroke(255);
  beginShape(POINTS);
    for(let theta = 0; theta < 360; theta += 0.1){
      let phi = k*theta;
      let x = (r0 + r1 * cos(phi)) * sin(theta);
      let y = r1 * sin(phi);
      let z = (r0 + r1 * cos(phi)) * cos(theta);
      vertex(x,y,z);
    }
    endShape();
      noFill();
}
