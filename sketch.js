var garden,rabbit,apple,orangel,redl;
var gardenImg,rabbitImg,appleImg,orangelImg,redlImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangelImg= loadImage("orangeLeaf.png");
  redlImg = loadImage("redImage.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  
  background(0);
  rabbit.x=World.mouseX
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();

  var select_sprites=Math.round(randon(1,3))
  if(frameCount%60==0){
    if(select_sprites==1){
      createApple()
    }
    else if(select_sprites==2){
      createorange()
    }
    else{
      createred()
    }
  }
}
function createApple(){
  apple = createSprite(random(50,350) ,40,10,10)
 apple.addImage(appleImg)
 apple.scale=0.08
 apple.velocityY=3
 apple.lifetime=150
}
function createorange(){
  orangel = createSprite(random(50,350) ,40,10,10)
  orangel.addImage(orangelImg)
  orangel.scale=0.08
  orangel.velocityY=3
  orangel.lifetime=150
}
function createred(){
  redl = createSprite(random(50,350) ,40,10,10)
  redl.addImage(redlImg)
  redl.scale=0.08
  redl.velocityY=3
  redl.lifetime=150
}
