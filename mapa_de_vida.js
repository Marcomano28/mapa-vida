let casa;
let camino;
let ima;
let cruz;
let expo;
let lago;
let lago1;
let sam;
let samiyo;

let x=0,y=0;
let stp=5;
let sz=1.2;
let dst=0;
let cnt=0;
let letra="......distancia......";
let angDist=0;
let pg;
//
const txt="Grimnitzsee";
const sg=200;
let cx,cy,fsz,inr,r;
let fn;
//
function preload(){
  ima=loadImage("/map.JPG");
  samiyo=loadImage("/samiyo.jpeg");
  sam=loadImage("/sam.jpeg");
  samiyo=loadImage("/samiyo.jpeg");
  lago1=loadImage("/lago1.jpeg");
  lago=loadImage("/lago.jpeg");
  expo=loadImage("/expo.jpeg");
  cruz=loadImage("/cruz.jpeg");
  casa=loadImage("/casa.jpeg");
  camino=loadImage("/camino.jpeg");
}
function pnti(pct){
  const nsc=.5;
  let ang=pct*TWO_PI;
  let cang=cos(ang);
  let sang=sin(ang);
  let t=frameCount*.005;
  let ns=noise(nsc*cang+nsc,nsc*sang+nsc,t);
  let rd=inr+r*ns;
  return {
    x:rd*cang+cx,
    y:rd*sang+cy
  };
}

function getX() {
  return touches.length > 0 ? touches[0].x : mouseX;
}

function getY() {
  return touches.length > 0 ? touches[0].y : mouseY;
}

let ö=300;
let canvas;
let scaleFactor;
function setup() {
  const sideLength = min(windowWidth, windowHeight);
  canvas = createCanvas(sideLength, sideLength);
  canvas.position((windowWidth - sideLength) / 2, (windowHeight - sideLength) / 2);
  scaleFactor = sideLength / 800;
  pixelDensity(1);
  preload();
  
  pg=createGraphics(sideLength, sideLength);
  pg.background(250,0);
  fn=loadFont("prescl.ttf");
  smooth();
  cursor(CROSS);
  x=mouseX;
  y=mouseY;
  pg.textAlign(LEFT);
  pg.fill(255,220);
    
  cx=120 * scaleFactor;
  cy=700 * scaleFactor;
  let cpt=min(height,width)/1000;
  fsz=cpt*70;
  inr=cpt*20;
  r=cpt*200;
  textFont("Helvetica");
  textSize(fsz);

  // Adjust ellipse coordinates proportionally using scaleFactor
  crzx = 735 * scaleFactor;
  crzy = 544 * scaleFactor;
  iyox = 527 * scaleFactor;
  iyoy = 114 * scaleFactor;
  xpox = 107 * scaleFactor;
  xpoy = 135 * scaleFactor;
  csax = 680 * scaleFactor;
  csay = 725 * scaleFactor;
  cmnx = 142 * scaleFactor;
  cmny = 453 * scaleFactor;
  samx = 119 * scaleFactor;
  samy = 500 * scaleFactor;
  lgx = 668 * scaleFactor;
  lgy = 41 * scaleFactor;
  lg1x = 47 * scaleFactor;
  lg1y = 659 * scaleFactor;
}

let c=16;
function draw() {
  background(40);
  ima.resize(canvas.width, canvas.height);
  image(ima, 0, 0);

  fill(0,120,180,50);
  noStroke();
  beginShape();
  for(let i=0;i<sg;i++){
    let p0=pnti(i/sg);
    vertex(p0.x, p0.y);
  }
  endShape(CLOSE);

  let pct=PI+atan2(getX()-(cx*2),getY()-(cy*2))/TWO_PI;
  let px=1/((inr+r/3)*TWO_PI);
  for(var i=0;i<txt.length;i++){
    let cw=textWidth(txt.charAt(i));
    pct+=cw/2*px;
    let lft=pnti(pct-.001);
    let rgt=pnti(pct+.001);
    let ang=atan2(lft.y-rgt.y,lft.x-rgt.x)+PI;
    push();
    let p=pnti(pct);
    translate(p.x, p.y);
    rotate(ang);
    translate(-p.x, -p.y);
    stroke(255);
    strokeWeight(1);
    text(txt.charAt(i), p.x - cw / 2, p.y);
    pop();
    pct+=cw/12*px;
  }

  fill(200,240,120,120);
  ellipse(crzx, crzy, c, c);
  fill(250,240,80,120);
  ellipse(iyox, iyoy, c, c);
  fill(20,240,120,120);
  ellipse(xpox, xpoy, c, c);
  fill(20,140,220,120);
  ellipse(csax, csay, c, c);
  fill(20,40,120,120);
  ellipse(cmnx, cmny, c, c);
  fill(200,40,120,120);
  ellipse(samx, samy, c, c);
  fill(20,240,20,80);
  ellipse(lgx, lgy, c, c);
  fill(20,20,220,80);
  ellipse(lg1x, lg1y, c, c);

  if (getX() > iyox - 88 && getX() < iyox + 88 && getY() > iyoy - 88 && getY() < iyoy + 88) {
    let d=dist(getX(), getY(), iyox, iyoy);
    push();
    translate(iyox, iyoy);
    scale(constrain(map(d, 0, 48, 1, 0), 0, 1));
    rect(-220, -55, 320, 320);
    fill(0);
    samiyo.resize(320, 320);
    image(samiyo, -220, -55);
  }
  pop();

  if (getX() > crzx - 48 && getX() > crzy - 48 && getY() < crzy + 48) {
    let d=dist(getX(), getY(), crzx, crzy);
    push();
    translate(crzx, crzy);
    scale(constrain(map(d, 0, 48, 1, 0), 0, 1));
    rect(-220, -155, 220, 150);
    fill(0);
    cruz.resize(280, 210);
    image(cruz, -220, -155);
  }
  pop();

  if (mouseX > csax - 58 && mouseX < csax + 58 && mouseY > csay - 58 && mouseY < csay + 58) {
    let d=dist(mouseX, mouseY, csax, csay);
    push();
    translate(csax, csay);
    scale(constrain(map(d, 0, 48, 1, 0), 0, 1));
    rect(-270, -155, 220, 220);
    fill(0);
    casa.resize(320, 320);
    image(casa, -270, -155);
  }
  pop();

  if (getX() > xpox - 48 && getX() < xpox + 48 && getY() > xpoy - 48 && getY() < xpoy + 48) {
    let d=dist(getX(), getY(), xpox, xpoy);
    push();
    translate(xpox, xpoy);
    scale(constrain(map(d, 0, 48, 1, 0), 0, 1));
    rect(-100, -128, 180, 220);
    fill(0);
    expo.resize(200, 250);
    image(expo, -100, -128);
  }
  pop();

  if (getX() > cmnx - 48 && getX() < cmnx + 48 && getY() > cmny - 48 && getY() < cmny + 48) {
    let d=dist(getX(), getY(), cmnx, cmny);
    push();
    translate(cmnx, cmny);
    scale(constrain(map(d, 0, 48, 1, 0), 0, 1));
    rect(-120, -155, 220, 280);
    fill(0);
    camino.resize(220, 280);
    image(camino, -120, -155);
  }
  pop();

  if (getX() > samx - 48 && getX() < samx + 48 && getY() > samy - 48 && getY() < samy + 48) {
    let d=dist(getX(), getY(), samx, samy);
    push();
    translate(samx, samy);
    scale(constrain(map(d, 0, 48, 1, 0), 0, 1));
    rect(-98, -108, 235, 280);
    fill(0);
    sam.resize(235, 280);
    image(sam, -98, -108);
  }
    pop();

  if (getX() > lgx - 48 && getX() < lgx + 48 && getY() > lgy - 48 && getY() < lgy + 48) {
    let d=dist(getX(), getY(), lgx, lgy);
    push();
    translate(lgx, lgy);
    scale(constrain(map(d, 0, 48, 1, 0), 0, 1));
    rect(-150, -35, 200, 280);
    fill(0);
    lago.resize(200, 280);
    image(lago, -150, -35);
  }
    pop();

  if (getX() > lg1x && getX() < lg1x + 48 && getY() > lg1y - 48 && getY() < lg1y + 48) {
    let d=dist(getX(), getY(), lg1x, lg1y);
    push();
    translate(lg1x, lg1y - 20);
    scale(constrain(map(d, 0, 48, 1, 0), 0, 1));
    rect(-40, -140, 280, 200);
    fill(0);
    lago1.resize(290, 210);
    image(lago1, -40, -140);
  }
    pop();

  if (mouseOver) {
    var d=dist(x, y, getX(), getY());
    pg.textSize(sz + (d / 1.3));
    pg.fill(255, 100);
    pg.stroke(5, 255);
    let nwl=letra.charAt(cnt);
    stp=pg.textWidth(nwl);

    if(d > stp){
      let ang=atan2(getY() - y, getX() - x);
      pg.push();
      pg.translate(x, y);
      pg.rotate(ang + random(angDist));
      pg.text(nwl, 0, 0);
      pg.pop();
      cnt++;
      if(cnt >= letra.length) cnt = 0;
      x = x + cos(ang) * stp;
      y = y + sin(ang) * stp;
    }
  }
  image(pg, 0, 0);
} 

function windowResized(){
  const sideLength = min(windowWidth, windowHeight);
  resizeCanvas(sideLength, sideLength);
  canvas.position((windowWidth - sideLength) / 2, (windowHeight - sideLength) / 2);
  scaleFactor = sideLength / 800;

  // Adjust ellipse coordinates proportionally using scaleFactor
  crzx = 666 * scaleFactor;
  crzy = 497 * scaleFactor;
  iyox = 479 * scaleFactor;
  iyoy = 104 * scaleFactor;
  xpox = 96 * scaleFactor;
  xpoy = 122 * scaleFactor;
  csax = 673 * scaleFactor;
  csay = 659 * scaleFactor;
  cmnx = 132 * scaleFactor;
  cmny = 413 * scaleFactor;
  samx = 109 * scaleFactor;
  samy = 460 * scaleFactor;
  lgx = 668 * scaleFactor;
  lgy = 41 * scaleFactor;
  lg1x = 47 * scaleFactor;
  lg1y = 659 * scaleFactor;
}  

function mouseOver(){
  x = mouseX;
  y = mouseY;
}

function mousePressed(){
  setup();
}