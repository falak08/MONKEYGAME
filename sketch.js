
var monkey , monkey_running,ground;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var survivaltime;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  
monkey=createSprite(80,315,20,20);
monkey.addAnimation("moving",monkey_running);
monkey.scale=0.1; 
  
ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
  FoodGroup=createGroup();
  obstacleGroup=createGroup();
  
  survivaltime=0;
}


function draw() {
background("white");
  
  survivaltime=Math.ceil(frameCount/frameRate());
  text("SURVIVAL TIME: "+survivaltime,100,50);
  if(keyDown("space")){
    monkey.velocityY=-12;
    }
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);
  
  food();
  obstacles();
drawSprites();  
}
function food(){
  if(frameCount%80===0)
{
 var banana=createSprite(500,165,10,40); 
   banana.y= Math.round(random(120,200));
  banana.velocityX = -3;
  banana.addImage(bananaImage);
  banana.scale=0.1;
  banana.lifetime=200;
  
  FoodGroup.add(banana);
}
}
function obstacles(){
   if (frameCount % 300 === 0){
   var obstacle = createSprite(500,325,10,40);
    obstacle.velocityX = -3;
     obstacle.addImage(obstacleImage);
     obstacle.scale=0.1;
     obstacle.lifetime=200;
     
     obstacleGroup.add(obstacle);
   }
}




