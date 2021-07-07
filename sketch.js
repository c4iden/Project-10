var seaImg
var ship, ship_ani;





function preload(){
ship_ani=loadAnimation("ship-3.png","ship-4.png");
seaImg = loadImage("sea.png");
}

function setup(){
  createCanvas(900,400);
  var sea=createSprite(450,200,900,400)
  sea.addImage(seaImg);
  sea.scale=0.5;
  ship=createSprite(400,300,20,30);
ship.addAnimation("shipanimation,",ship_ani);
ship.scale=0.3;



}

function draw() {
  background("grey");
 drawSprites();
 

}











