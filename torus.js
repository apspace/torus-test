let offset = 0;
let r0, r1, k = 3;
let r0_slider, r1_slider, k_slider, m_slider;
let r0_val, r1_val, k_val, m_val;;
let show_torus = false;

function setup(){
  canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.position(0, 0);
  canvas.style('z-index', ' -1');
  canvas.style('position', 'absolute');
  angleMode(DEGREES);
  colorMode(RGB, 255, 255, 255, 1);
  r0_val = createDiv();
  r0_slider = createSlider(0, 200, 130, 1);

  r1_val = createDiv();
  r1_slider = createSlider(0, 200, 80, 1);

  k_val = createDiv();
  k_slider = createSlider(0 ,30 ,3 ,1 );
  m_val = createDiv();
  m_slider = createSlider(0 ,30 ,3 ,1 );


}

function draw(){
  // ambientLight(0, 60, 0);
  // pointLight(0, 255, 0, 0, 0, 300);
  background(240);
  orbitControl(8,8);
  rotateX(-30);
  // rotateY(offset);
  // rotateZ(offset);
  let d1 = dist(mouseX, 0, windowWidth/2, 0);
  let d2 = dist(mouseY, 0, windowHeight/2, 0)
  // r0 = map(d1, 0 , windowWidth/2, 0, 300);
  // r1 = map(d2, 0, windowHeight/2, 0, 300);

  // k = k_slider.value();
  r0 = r0_slider.value();
  r1 = r1_slider.value();
  toroidalSpiral(r0, r1, k_slider.value(), m_slider.value());
  if (show_torus == true) {
    toroidalTorus(r0, r1);
  }



  offset += 1;

  r0_val.html("radius 0: " + r0_slider.value());
  r1_val.html("radius 1: " + r1_slider.value());
  k_val.html("k: " + k_slider.value());
  m_val.html("m: " + m_slider.value());

}

//Change by Keyboard
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    k += -1;
  } else if (keyCode === RIGHT_ARROW) {
    k += 1;
  }
  if (key == 'h'){
    show_torus = !show_torus
  }
}

// function keyPressed() {
//   if (keyCode === SPACE){
//     show_torus = !show_torus
//   }
// }

//Change by Mouse
// function mousePressed() {
//   k += 1;
// }

//Normal Torus
function toroidalTorus(r0, r1) {
  normalMaterial();
  // fill(250,100,0);
  push();
  rotateX(90);
  torus(r0, r1, 60, 60);
  pop();
  // strokeWeight(0.5);
  // stroke(150);
  // fill(255,255,255,0);
  // for(let theta = 0; theta < 360; theta += 20){
  //   beginShape();
  //   for(let phi = 0; phi < 360; phi += 10){
  //     let x = (r0 + r1 * cos(phi)) * sin(theta);
  //     let y = r1 * sin(phi);
  //     let z = (r0 + r1 * cos(phi)) * cos(theta);
  //     vertex(x,y,z);
  //   }
  //   endShape(CLOSE);
  // }
  // for(let phi = 0; phi < 360; phi += 20){
  //   beginShape();
  //   for(let theta = 0; theta < 360; theta += 10){
  //     let x = (r0 + r1 * cos(phi)) * sin(theta);
  //     let y = r1 * sin(phi);
  //     let z = (r0 + r1 * cos(phi)) * cos(theta);
  //     vertex(x,y,z);
  //   }
  //   endShape(CLOSE);
  // }
}

//Spiral
function toroidalSpiral(r0, r1, k, m) {
  strokeWeight(22);
  stroke(0,255,0,1);
  beginShape(POINTS);
    for(let theta = 0; theta < 360; theta += 0.1){
      let phi = theta;
      let x = (r0 + r1 * cos(m*phi+offset)) * sin(k*theta);
      let y = r1 * sin(m*phi+offset);
      let z = (r0 + r1 * cos(m*phi+offset)) * cos(k*theta);
      vertex(x,y,z);
    }
    endShape();
      noFill();
}
