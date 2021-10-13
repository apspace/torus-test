let canvas;
let c1;
let c2;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.position(0, 0);
  canvas.style('z-index', ' -1');
  canvas.style('position', 'fixed');
  c1 = color(0);
  c2 = color('#eeeeee');
  // pixelDensity(2);
}
function draw() {

  // materials: texture(img); fill();normalMaterial(); specularMaterial(250); ambientMaterial(250);
  noStroke();
  background(255);
  orbitControl();
  // let locX = mouseX - height / 2;
  // let locY = mouseY - width / 2;
  ambientLight(60, 60, 60);
  pointLight(255, 255, 255, 100, 100, 100);
  push();
  specularMaterial(250);
  translate(-200, -100, 0);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  box(100, 50, 200);
  pop();

  fill(200, 50, 20);
  // normalMaterial();
  // specularMaterial(250);
  ambientMaterial(100);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  sphere(100);
}
