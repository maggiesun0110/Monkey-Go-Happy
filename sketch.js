var survivalTime = 0;


var monkey, ground, monkey_running
var banana, bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score

function preload() {
  bananaImage = loadImage("banana.png");


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")



  obstaceImage = loadImage("obstacle.png");

}



function setup() {
  createCanvas(500, 500);

  monkey = createSprite(70, 435);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;

  bananaGroup = new Group();
  obstaclesGroup = new Group();
  
  ground = createSprite(250, 450, 1000, 10);
  ground.x = ground.width / 2;
  
  bananaGroup = new Group();
  obstacleGroup = new Group();
}
 

function draw() {

  background("lightblue");
  
  


  stroke("black");
  textSize(20);
  fill("black")
  survivalTime = Math.ceil(frameCount / frameRate());
  text("Survival Time:" + survivalTime, 100, 50);

  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }


  monkey.collide(ground);

  if (keyDown("space") && monkey.y >= 100) {
    monkey.velocityY = -12;
  }


  monkey.velocityY = monkey.velocityY + 0.8
  spawnObstacles()
  SpawnBananas()
  drawSprites();
}


function spawnObstacles() {
  if (frameCount % 300 === 0) {
    var obstacle = createSprite(300, 450);
    obstacle.addImage(obstacleImage);

    //generate random obstacles
    var rand = Math.round(random("obstacle"));

    obstacle.velocityX = -4
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 300;

    
  }
}

function SpawnBananas() {

  if (frameCount % 80 === 0) {
    var banana = createSprite(200,450);
    banana.addImage(bananaImage);

    banana.y = Math.round(random(120, 200));


    banana.velocityX = -8;
    banana.scale = 0.05;
    //assign lifetime to the variable
    banana.lifetime = -1;

    bananaGroup.add(banana);

  }
}