/******************
Code by Vamoss
Original code link:
https://www.openprocessing.org/sketch/880860

Author links:
http://vamoss.com.br
http://twitter.com/vamoss
http://github.com/vamoss
******************/

const MESSAGE = "Hi, I am Ольга";
let centerX, centerY, radius, prevRadius, angle, dir, letterCount, letterSize, fnt;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);
	textAlign(CENTER, CENTER);
  fnt = loadFont("../fonts/jet_bolf.otf");
	letterSize = 1;
	letterCount = 0;
	centerX = 10;
	centerY = height/2;
	radius = 10;
	prevRadius = 10;
	angle = 0;
	dir = 1;
}

function draw() {
  textFont(fnt);
	let letter = MESSAGE[letterCount];
	letterCount = ++letterCount%MESSAGE.length;

	if(frameCount % 4 == 0)
		letterSize = ceil(frameCount / 40)

	textSize(letterSize);
	let letterWidth = textWidth(letter);

	var angleIncrease = letterWidth / radius * dir;
	var radiusIncrease = letterSize / 40;

	angle += angleIncrease / 2;
	radius += radiusIncrease / 2;

	let x = cos(angle) * radius + centerX;
	let y = sin(angle) * radius + centerY;

	push();
		translate(x, y);
		rotate(angle + HALF_PI * dir);
		text(letter, 0, 0);
	pop();

	angle += angleIncrease / 2;
	radius += radiusIncrease / 2;

	if(radius > prevRadius / 1.5 && mod(angle, TWO_PI) < 10 / radius ){
		prevRadius = radius * 2;
		centerX += radius * 1.5;
		radius /= 2;
		angle += PI;
		dir *= -1;
	}
}

//fixes negative values
function mod(m, n) {
    return ((m%n)+n)%n;
}
