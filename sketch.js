var garden,rabbit,apple,leaves;
var gardenImg,rabbitImg,AppleImg,LeavesImg;
var edges;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  AppleImg = loadImage("apple.png");
  LeavesImg = loadImage("leaf.png");
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
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = World.mouseX
  
  var select_sprites = Math.round(random(1,2))
  
  if(frameCount%80===0) 
  {
    if(select_sprites==1)
    {
      spawnApples();
  }
   else
     {
       spawnLeaves();
     }
  }
  
  drawSprites();
}

function spawnApples(){
  Apples = createSprite(random(50,350),40, 10, 10);
  Apples.addImage("apples",AppleImg);
  Apples.scale = 0.07;
  Apples.velocityY = 3;
  Apples.lifetime = 75;
}

function spawnLeaves(){
  Leaves = createSprite(random(80,330),50,20,20);
  Leaves.addImage("leaves",LeavesImg);
  Leaves.scale = 0.07;
  Leaves.velocityY = 3;
  Leaves.lifetime = 75;
}