var s = 200, t = 0;
var s2 = 500, t2 = 0;
let cnv;
let fnt;
let txt = "Jet", txt2 = "Astro";
let x = 0, y = 0;
let dist = 0.0;
let col1 = 259;
let colInc = 1;

function setup() {
  cnv = createCanvas(innerWidth/2, innerWidth/2);
  cnv.parent("jet");
  fnt = loadFont('../fonts/jet_regular.otf');
  textFont(fnt);
  colorMode(HSB, 360, 100, 100);
}

function draw() {
  background(0);
  translate(innerWidth/2, innerHeight);
  for (i = 0; i < s; i+=20){
    for (j = 0; j <TAU; j +=PI/45) {
      let p;
      if (i % 40 == 0){
        p = txt;
        fill(0, 0, 80);
        R = i/s*TAU*2;
        textSize(R*1.2);
        text(p, sin(j+sin(R+j*2)+t)*i*4-400,cos(j-t+R*5)*i*3-450);
      } else {
        let z = frameCount % 66;
        if (frameCount % 66 == 0) { col1 = 259;}
        fill(col1, 100, 100);
        p = txt2;
        R = i/s*TAU*2;
        textSize(R*2);
        text(p, sin(j+sin(R+j*2)+t2)*i*1.5-400,cos(j-t2+R*5)*i*1.5-450);
      }
    }
  }

  // for (i = 0; i < s2; i+=100){
  //   for (j = 0; j <TAU; j +=PI/120) {
  //     R = i/s2*TAU*noise(i/j, 1, 2);
  //     fill(72, 84, 123);
  //     textSize(R*4);
  //     text(txt2, sin(j+sin(R+j*3)+t2)*i*3,cos(j-t2+R*1.3)*i*5-400);
  //   }
  // }
  t+=0.014;
  t2+=0.01;
  if (frameCount % 66 < 33 ) {
    col1++;
  } else {
    col1--;
  }
}
