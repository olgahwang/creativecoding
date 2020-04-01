var s = 300, t = 0;
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
  translate(innerHeight/2, innerHeight/2);
  for (i = 0; i < s; i+=20){
    for (j = 0; j <TAU; j +=PI/45) {
      let p;
      if (i % 40 == 0){
        p = txt;
        fill(0, 0, 80);
        R = i/s*TAU*2;
        textSize(R);
        text(p, sin(j+sin(R+j*2)+t)*i*4-100,cos(j-t+R*5)*i*3);
      } else {
        let z = frameCount % 66;
        if (frameCount % 66 == 0) { col1 = 259;}
        fill(col1, 100, 100);
        p = txt2;
        R = i*0.5/s*TAU*3;
        textSize(R*2);
        text(p, sin(j+sin(R+j)+t2*2)*i-100,cos(j-t2+R*9)*i);
      }
    }
  }

  t+=0.001;
  t2+=0.004;
  if (frameCount % 66 < 33 ) {
    col1++;
  } else {
    col1--;
  }
}
