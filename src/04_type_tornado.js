let font;
let fontSize = 5;
let string = "OLGA";
let cur = 0;
let col = true;
let hsbColor;
let pnt = true;

function setup() {
  var cnv=createCanvas(innerWidth, innerHeight, WEBGL);
  cnv.parent("typeTornado");
  font = loadFont("../fonts/Antonym-Regular.ttf");
  colorMode(HSB, 360, 100, 100);
}

function draw() {
  background(0,0,0);
  rotateX(frameCount * 0.01);
  ambientLight(60, 60, 60);
  for (let j = 0; j < 8; j++) {
    push();
    for (let i = 0; i < 60; i++) {
      translate(
        sin(frameCount * 0.001 + j) * 200,
        sin(frameCount * 0.001 + j) * 100,
        i * 0.4
      );
      let k = noise(frameCount*10, frameCount*20);
      rotateZ(frameCount * 0.001);
      rotateY(-frameCount * 0.002);
      push();
      //box(20, 20, 20);
      if (frameCount % 720 < 360){
        col = true;
      } else {
        col = false;
      }

      if (col){
        hsbColor = frameCount % 360;
      } else {
        hsbColor = 360-frameCount % 360;
      }
      if (hsbColor < 90){
          hsbColor+=90;
      } else {
        if (hsbColor > 260){
          hsbColor = hsbColor % 260 + 90;
        }
      }

      fill(hsbColor, 100, 100);
      let txt;
      textFont(font);
      textSize(70);
      cur = i % string.length;
      txt = string[cur];
      text(txt, k, 200);
      //normalMaterial();
      //sphere(4, 4, 4);
      pop();
    }
    pop();
  }
}

function mousePressed(){
  createCanvas(innerWidth, innerHeight, WEBGL);
}
