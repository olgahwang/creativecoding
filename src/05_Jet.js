var s = 100, t = 0;
var s2 = 500, t2 = 0;
let cnv;
let fnt;
let txt = "Jet", txt2 = "Astro";
let x = 0, y = 0;
let dist = 0.0;
let col1 = 259;
let colInc = 1;
let xx = 40;
let yy = 300;
let p;
let cnt = 0;
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
  i = 80;
  for (i = 0; i < s; i+=20){
    for (j = 0; j <TAU; j +=PI/90) {
      if (i == 60) {
        R = i/s*TAU*2;
        for (j = 0; j <TAU; j +=PI/15) {
          if (parseInt(j / 2) == 0){p = "Space";} else {p = "Jet";}
          if (frameCount % 66 == 0) { col1 = 259;}
          fill(0, 0, 90);
          let xCor = sin(j+sin(R+j)+t2)*i*5-100;
          let yCor = cos(j-t2+R)*i*5-100;
          let d = sqrt(pow(xCor-400-xx, 2) + pow(yCor-400-yy, 2));
          textSize(R+d/10);
          text(p, xCor,yCor+100);
        }
      } else {
        let z = frameCount % 66;
        if (frameCount % 66 == 0) { col1 = 259;}
        fill(col1, 100, 100);
        if (cnt % 2 == 0){
          p = txt2;
        } else {p = txt;}
        R = i/s*TAU*2;
        textSize(R*3+1);
        text(p, sin(j*2+sin(R*3+j)+t2)*i*4.2-100,cos(j*2-t2+R)*i*4.2-20);
      }
    }
  }




  // for (j = 0; j <TAU; j +=20){
  //   let i = 50;
  //     let z = frameCount % 66;
  //     if (frameCount % 66 == 0) { col1 = 259;}
  //     fill(col1, 100, 100);
  //     p = txt2;
  //     R = i*2/s*TAU*3;
  //     let xCor = sin(j+2*sin(R+j)+t2*2)*i*8;
  //     let yCor = cos(j-t2+R*9)*i*5;
  //     let d = sqrt(pow(xCor - xx, 2) + pow(yCor - xx, 2))/1000;
  //     textSize(R*d*3);
  //     text(p, xCor,yCor);
  // }

  if (cnt == 5) {
    cnt = 0;
  }
  t+=0.001;
  t2+=0.004;
  if (frameCount % 66 < 33 ) {
    col1++;
  } else {
    col1--;
  }
}
