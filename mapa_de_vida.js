let casa;
let camino;
let ima;
let cruz;
let expo;
let lago;
let lago1;
let sam;
let samiyo;
function preload(){
  ima=loadImage("data/map.JPG");
  samiyo=loadImage("data/samiyo.jpeg");
  sam=loadImage("data/sam.jpeg");
  samiyo=loadImage("data/samiyo.jpeg");
  lago1=loadImage("data/lago1.jpeg");
  lago=loadImage("data/lago.jpeg");
  expo=loadImage("data/expo.jpeg");
  cruz=loadImage("data/cruz.jpeg");
  casa=loadImage("data/casa.jpeg");
  camino=loadImage("data/camino.jpeg");
}
function setup() {
createCanvas(724,724);
background(200,200,120);
preload();
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
let c=16;//sz

function draw() {
ellipse(mouseX,mouseY,100,100);
image(ima,0,0);
fill(200,240,120,120);
ellipse(crzx,crzy,c,c);
fill(250,240,80,120);
ellipse(iyox,iyoy,c,c);
fill(20,240,120,120);
ellipse(xpox,xpoy,c,c);
fill(20,140,220,120);
ellipse(csax,csay,c,c);
fill(20,40,120,120);
ellipse(cmnx,cmny,c,c);
fill(200,40,120,120);
ellipse(samx,samy,c,c);
fill(20,240,20,80);
ellipse(lgx,lgy,c,c);
fill(20,20,220,80);
ellipse(lg1x,lg1y,c,c);
if (mouseX > iyox - 8 && mouseX < iyox + 8 && 
    mouseY > iyoy - 8 && mouseY < iyoy + 8) {
        
    rect(iyox-220, iyoy-55, 320, 320);
    fill(0);
   
    loadImage("cruz.jpeg");
    samiyo.resize(320,320);
    image(samiyo, iyox-220, iyoy -55);
   
      }
      if (mouseX > crzx - 8 && mouseX < crzx + 8 && 
    mouseY > crzy - 8 && mouseY < crzy + 8) {
        
    rect(crzx-220, crzy-155, 220, 150);
    fill(0);
   
    loadImage("cruz.jpeg");
    cruz.resize(280,210);
    image(cruz, crzx-220, crzy -155);
   
      }
      if (mouseX > csax - 8 && mouseX < csax + 8 && 
    mouseY > csay - 8 && mouseY < csay + 8) {
        
    rect(csax-220, csay-155, 220, 220);
    fill(0);
   
    loadImage("casa.jpeg");
    casa.resize(320,320);
    image(casa, csax-220, csay -155);
   
      }
       if (mouseX > xpox - 8 && mouseX < xpox + 8 && 
    mouseY > xpoy - 8 && mouseY < xpoy + 8) {
        
    rect(xpox-120, xpoy-140, 180, 220);
    fill(0);
   
    loadImage("expo.jpeg");
    expo.resize(180,220);
    image(expo, xpox-120, xpoy -140);
   
      }
      if (mouseX > cmnx - 8 && mouseX < cmnx + 8 && 
    mouseY > cmny - 8 && mouseY < cmny + 8) {
        
    rect(cmnx-120, cmny-155, 220, 280);
    fill(0);
   
    loadImage("camino.jpeg");
    camino.resize(220,280);
    image(camino, cmnx-120, cmny -155);
   
      }
      if (mouseX > samx - 8 && mouseX < samx + 8 && 
    mouseY > samy - 8 && mouseY < samy + 8) {
        
    rect(samx-98, samy-108, 225, 270);
    fill(0);
   
    loadImage("sam.jpeg");
    sam.resize(225,270);
    image(sam, samx-98, samy -108);
   
      }
       if (mouseX > lgx - 8 && mouseX < lgx + 8 && 
    mouseY > lgy - 8 && mouseY < lgy + 8) {
        
    rect(lgx-180, lgy-45, 230, 280);
    fill(0);
   
    loadImage("lago.jpeg");
    lago.resize(230,280);
    image(lago, lgx-180, lgy -45);
   
      }
       if (mouseX > lg1x - 8 && mouseX < lg1x + 8 && 
    mouseY > lg1y - 8 && mouseY < lg1y + 8) {
        
    rect(lg1x-40, lg1y-145, 280, 200);
    fill(0);
   
    loadImage("lago1.jpeg");
    lago1.resize(280,200);
    image(lago1, lg1x-40, lg1y -145);
   
      }
      
  }
  
    
