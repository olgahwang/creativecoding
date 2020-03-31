var s = 1000, t = 100;
let cnv;
let fnt;
let txt = "J";

function setup() {
  cnv = createCanvas(innerWidth, innerHeight);
  fnt = loadFont('../fonts/Antonym-Regular.otf');
  //textFont(fnt);
}

function draw() {
  background(7, 15, 47);
  translate(innerWidth/2, innerHeight);
  for (i = 0; i < s; i+=5){
    for (j = 0; j <TAU; j +=PI/30) {
      R = i/s*TAU*2;
      // if (sin(j+sin(R+j*2)+t)*i < innerWidth*0.1 || sin(j+sin(R+j*2)+t)*i > innerWidth*0.9){
      //   fill(214, 27, 25);
      // } else {
      //   fill(255);
      // }
      fill(72, 84, 123);
      textSize(R*2);
      text(txt, sin(j+sin(R+j*2)+t)*i,cos(j-t+R*1.3)*i-500);
    }
  }
  t+=0.01;
  //t=mouseY*0.001;
}
