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
let ö=300;
function setup() {
  createCanvas(windowWidth,windowHeight);
  preload();
  
  pg=createGraphics(724,724);
  pg.background(250,0);
  fn=loadFont("prescl.ttf");
  smooth();
  cursor(CROSS);
  x=mouseX;
  y=mouseY;
  pg.textAlign(LEFT);
  pg.fill(255,220);
    
  cx=120;
  cy=650;
  let cpt=min(height,width)/1000;
  fsz=cpt*90;
  inr=cpt*20;
  r=cpt*200;
  // pg.textFont(fn);
  // pg.textSize(sz);
  textFont("Helvetica");
  textSize(fsz);
  }
  let crzx=666;
  let crzy=497;
  let iyox=479;
  let iyoy=104;
  let xpox=96;
  let xpoy=122;
  let csax=673;
  let csay=659;
  let cmnx=132;
  let cmny=413;
  let samx=109;
  let samy=460;
  let lgx=668;
  let lgy=41;
  let lg1x=47;
  let lg1y=659;
  let c=16;
function draw() {
background(40);
ima.resize(744,700);
image(ima,ö,0);

fill(0,120,180,50);
noStroke();
beginShape();
for(let i=0;i<sg;i++){
  let p0=pnti(i/sg);
  vertex(p0.x+ö,p0.y);
}
endShape(CLOSE);
let pct=PI+atan2(mouseX-(cx*2),mouseY-(cy*2))/TWO_PI;
//let pct=-10;
let px=1/((inr+r/3)*TWO_PI);
for(var i=0;i<txt.length;i++){
  let cw=textWidth(txt.charAt(i));
  pct+=cw/2*px;
  let lft=pnti(pct-.001);
  let rgt=pnti(pct+.001);
  let ang=atan2(lft.y-rgt.y,lft.x-rgt.x)+PI;
  push();
  let p=pnti(pct);
  translate(p.x+ö,p.y);
  rotate(ang);
  translate(-p.x,-p.y);
  stroke(255);
  strokeWeight(1);
  text(txt.charAt(i),p.x-cw/2,p.y);
  pop();
  pct+=cw/12*px;
}
fill(200,240,120,120);
ellipse(crzx+ö,crzy,c,c);
fill(250,240,80,120);
ellipse(iyox+ö,iyoy,c,c);
fill(20,240,120,120);
ellipse(xpox+ö,xpoy,c,c);
fill(20,140,220,120);
ellipse(csax+ö,csay,c,c);
fill(20,40,120,120);
ellipse(cmnx+ö,cmny,c,c);
fill(200,40,120,120);
ellipse(samx+ö,samy,c,c);
fill(20,240,20,80);
ellipse(lgx+ö,lgy,c,c);
fill(20,20,220,80);
ellipse(lg1x+ö,lg1y,c,c);
if (mouseX > iyox +ö- 88 && mouseX < iyox +ö+ 88 && 
    mouseY > iyoy - 88 && mouseY < iyoy + 88) {
    let d=dist(mouseX,mouseY,iyox+ö,iyoy);
       push();
       translate(iyox+ö,iyoy);
    scale(constrain(map(d,0,48,1,0),0,1));       
    rect(-220,-55, 320, 320);
    fill(0);
    //loadImage("samiyo.jpeg");
    samiyo.resize(320,320);
    image(samiyo,-220,-55);
      }
	  pop();
      if (mouseX > crzx+ö - 48 && mouseX < crzx+ö + 48 && 
    mouseY > crzy - 48 && mouseY < crzy + 48) {
		let	d=dist(mouseX,mouseY,crzx+ö,crzy);
		push();
    translate(crzx+ö,crzy);
    scale(constrain(map(d,0,48,1,0),0,1));     
    rect(-220,-155, 220, 150);
    fill(0);
    cruz.resize(280,210);
    image(cruz,-220, -155);
      }
	  pop();
    if (mouseX > csax +ö- 58 && mouseX < csax+ö + 58 && 
    mouseY > csay - 58 && mouseY < csay + 58) {
		let	d=dist(mouseX,mouseY,csax+ö,csay);
		push();
		translate(csax+ö,csay);
    scale(constrain(map(d,0,48,1,0),0,1));     
    rect(-270,-155, 220, 220);
    fill(0);
    casa.resize(320,320);
    image(casa,-270,-155);
      }
	  pop();
       if (mouseX > xpox +ö- 48 && mouseX < xpox+ö + 48 && 
    mouseY > xpoy - 48 && mouseY < xpoy + 48) {
		let d=dist(mouseX,mouseY,xpox+ö,xpoy);
		 push();
		translate(xpox+ö,xpoy);
    scale(constrain(map(d,0,48,1,0),0,1));     
    rect(-100,-128, 180, 220);
    fill(0);
    expo.resize(200,250);
    image(expo,-100,-128);
			 }
    pop();
      if (mouseX > cmnx+ö - 48 && mouseX < cmnx+ö + 48 && 
    mouseY > cmny - 48 && mouseY < cmny + 48) {
		d=dist(mouseX,mouseY,cmnx+ö,cmny);
			push();
		translate(cmnx+ö,cmny);
    scale(constrain(map(d,0,48,1,0),0,1));     
    rect(-120,-155, 220, 280);
    fill(0);
    camino.resize(220,280);
    image(camino,-120,-155);
			}
     pop();
      if (mouseX > samx +ö- 48 && mouseX < samx +ö+ 48 && 
    mouseY > samy - 48 && mouseY < samy + 48) {
		let	d=dist(mouseX,mouseY,samx+ö,samy);
		 push();
		translate(samx+ö,samy);
    scale(constrain(map(d,0,48,1,0),0,1));     
    rect(-98,-108, 235, 280);
    fill(0);
    sam.resize(235,280);
    image(sam,-98,-108);
			}
     pop();
       if (mouseX > lgx +ö- 48 && mouseX < lgx+ö + 48 && 
    mouseY > lgy - 48 && mouseY < lgy + 48) {
		let	d=dist(mouseX,mouseY,lgx+ö,lgy);
		 push();
		translate(lgx+ö,lgy);
    scale(constrain(map(d,0,48,1,0),0,1));     
    rect(-150,-35, 200, 280);
    fill(0);
    lago.resize(200,280);
    image(lago,-150,-35);
			 }
     pop();
       if (mouseX > lg1x +ö && mouseX < lg1x +ö+ 48 && 
    mouseY > lg1y - 48 && mouseY < lg1y + 48) {
		let	d=dist(mouseX,mouseY,lg1x+ö,lg1y);
			push();
		translate(lg1x+ö,lg1y-20);
    scale(constrain(map(d,0,48,1,0),0,1));     
    rect(-40,-140, 280, 200);
    fill(0);
    lago1.resize(290,210);
    image(lago1,-40,-140);
			 }
       if (mouseOver) {
        var d=dist(x,y,mouseX,mouseY);
        pg.textSize(sz+(d/1.3));
        pg.fill(255,100);
        pg.stroke(5,255);
        let nwl=letra.charAt(cnt);
        stp=pg.textWidth(nwl);

        if(d>stp){
          let ang=atan2(mouseY-y,mouseX-x);
          pg.push();
          pg.translate(x-ö,y);
          pg.rotate(ang+random(angDist));
          pg.text(nwl,0,0);
          pg.pop();
          cnt++;
          if(cnt>=letra.length)cnt=0;
          x=x+cos(ang)*stp;
          y=y+sin(ang)*stp;
        }
      }
      image(pg,ö,0);
     } 
      
function mouseOver(){
  x=mouseX+ö;
  y=mouseY+ö;
}
function mousePressed(){
  setup();

}
// function draw() {
// ellipse(mouseX,mouseY,100,100);
// image(ima,0,0);
// fill(200,240,120,120);
// ellipse(crzx,crzy,c,c);
// fill(250,240,80,120);
// ellipse(iyox,iyoy,c,c);
// fill(20,240,120,120);
// ellipse(xpox,xpoy,c,c);
// fill(20,140,220,120);
// ellipse(csax,csay,c,c);
// fill(20,40,120,120);
// ellipse(cmnx,cmny,c,c);
// fill(200,40,120,120);
// ellipse(samx,samy,c,c);
// fill(20,240,20,80);
// ellipse(lgx,lgy,c,c);
// fill(20,20,220,80);
// ellipse(lg1x,lg1y,c,c);
// if (mouseX > iyox - 8 && mouseX < iyox + 8 && 
//     mouseY > iyoy - 8 && mouseY < iyoy + 8) {
        
//     rect(iyox-220, iyoy-55, 320, 320);
//     fill(0);
   
//     loadImage("cruz.jpeg");
//     samiyo.resize(320,320);
//     image(samiyo, iyox-220, iyoy -55);
   
//       }
//       if (mouseX > crzx - 8 && mouseX < crzx + 8 && 
//     mouseY > crzy - 8 && mouseY < crzy + 8) {
        
//     rect(crzx-220, crzy-155, 220, 150);
//     fill(0);
   
//     loadImage("cruz.jpeg");
//     cruz.resize(280,210);
//     image(cruz, crzx-220, crzy -155);
   
//       }
//       if (mouseX > csax - 8 && mouseX < csax + 8 && 
//     mouseY > csay - 8 && mouseY < csay + 8) {
        
//     rect(csax-220, csay-155, 220, 220);
//     fill(0);
   
//     loadImage("casa.jpeg");
//     casa.resize(320,320);
//     image(casa, csax-220, csay -155);
   
//       }
//        if (mouseX > xpox - 8 && mouseX < xpox + 8 && 
//     mouseY > xpoy - 8 && mouseY < xpoy + 8) {
        
//     rect(xpox-120, xpoy-140, 180, 220);
//     fill(0);
   
//     loadImage("expo.jpeg");
//     expo.resize(180,220);
//     image(expo, xpox-120, xpoy -140);
   
//       }
//       if (mouseX > cmnx - 8 && mouseX < cmnx + 8 && 
//     mouseY > cmny - 8 && mouseY < cmny + 8) {
        
//     rect(cmnx-120, cmny-155, 220, 280);
//     fill(0);
   
//     loadImage("camino.jpeg");
//     camino.resize(220,280);
//     image(camino, cmnx-120, cmny -155);
   
//       }
//       if (mouseX > samx - 8 && mouseX < samx + 8 && 
//     mouseY > samy - 8 && mouseY < samy + 8) {
        
//     rect(samx-98, samy-108, 225, 270);
//     fill(0);
   
//     loadImage("sam.jpeg");
//     sam.resize(225,270);
//     image(sam, samx-98, samy -108);
   
//       }
//        if (mouseX > lgx - 8 && mouseX < lgx + 8 && 
//     mouseY > lgy - 8 && mouseY < lgy + 8) {
        
//     rect(lgx-180, lgy-45, 230, 280);
//     fill(0);
   
//     loadImage("lago.jpeg");
//     lago.resize(230,280);
//     image(lago, lgx-180, lgy -45);
   
//       }
//        if (mouseX > lg1x - 8 && mouseX < lg1x + 8 && 
//     mouseY > lg1y - 8 && mouseY < lg1y + 8) {
        
//     rect(lg1x-40, lg1y-145, 280, 200);
//     fill(0);
   
//     loadImage("lago1.jpeg");
//     lago1.resize(280,200);
//     image(lago1, lg1x-40, lg1y -145);
   
//       }
      
//   }
  
    
