
var sea
var ship

function preload(){
  seaImg = loadImage("sea.png");
  shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);
  //background("blue");
  sea = createSprite(0,200,400,20)
  sea.addImage(seaImg)
  sea.velocityX = -3
  sea.scale = 0.5
  ship = createSprite(100,180,20,20)
  ship.addAnimation('moving',shipImg1)
  ship.scale = 0.3
}

function draw() {
  //background(0);
  if(sea.x<0){
    sea.x = sea.width/8
  }
  drawSprites()
 }
