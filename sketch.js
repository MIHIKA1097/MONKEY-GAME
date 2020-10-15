var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var foodGroup, obstacleGroup;
var score=0, ground;
var gameState="PLAY"


function preload(){
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png")
 
}



function setup() {
   //createCanvas(600,600);
  monkey=createSprite(50,160,20,50);
 monkey.addAnimation("running", monkey_running);
  monkey.scale=0.1;
 
  ground=createSprite(400,350,900,10)
// ground.x = ground.width /2;
  ground.velocityX = -4 ;
  

  
  obstacleGroup = new Group();
  foodGroup = new Group();

 

  
}


function draw() {
 background("white")
   if (ground.x < 0){
      ground.x = ground.width/2;
   }
spawnFood();
 spawnObstacle(); 
  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -10
  }
  monkey.velocityY = monkey.velocityY + 0.8
 if(obstacleGroup.isTouching(monkey)){
   ground.velocityX=0;
   monkey.velocityY=0
    obstacleGroup.setVelocityXEach(0)
   foodGroup.setVelocityXEach(0)
   obstacleGroup.setLifetimeEach(-1)
  foodGroup.setLifetimeEach(-1); 
    }
  
  
  
  
  monkey.collide(ground)
  drawSprites();
  score=Math.round(frameCount/frameRate());
  text("Survival Time "+score,200,50);
}
function spawnFood(){
 if(frameCount%80===0){
     banana=createSprite(600,100,20,20);
   banana.y=random(100,200);
  banana.addImage(bananaImage);
  banana.scale=0.1;
   banana.velocityX=-5;
   banana.lifetime=300;
   monkey.depth=banana.depth+1
 foodGroup.add(banana)   
  }  

}
function spawnObstacle(){
  if(frameCount%300===0){
obstacle=createSprite(400,320,30,50)
  obstacle.addImage(obstaceImage);
    obstacle.scale=0.15;
  obstacle.velocityX=-6;
  obstacle.lifetime=300;  
  
obstacleGroup.add(obstacle)
}
}


  







