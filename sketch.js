var platform, platformGroup;
var mario;
var groundImage, marioImage, wallImage, obstacleImage;
var wall;
var obstacle,obstacleGroup;
var flag,flagImage; //pole1,pole2;
var PLAY=0;
var WIN=1;
var LOSE=2;
var gameState=PLAY;

function preload()
{
  groundImage = loadImage("images/ground.png");
  marioImage = loadAnimation("images/Capture1.png", "images/Capture3.png", "images/Capture4.png");
  wallImage = loadImage("images/wall.png");
  obstacleImage = loadImage("images/obstacle1.png");
  flagImage = loadImage("images/Flag.png")
}

function setup() 
{
  createCanvas(displayWidth, 700);
                                                
  var xPosition = 0;  
  var gap; 
  
  obstacleGroup=new Group();

  mario = new Player();
  platformGroup = new Group();

  for(i=0; i<2; i++)
  {
    platform = new Platform(xPosition); 
    platformGroup.add(platform.spt);
    gap = random([90, 140]);
    xPosition = xPosition + platform.sptW + gap;
    if (i%3===0)
    {
      wall = new Wall(xPosition);
      platformGroup.add(wall.spt);
      obstacle = new Obstacle(xPosition);
      obstacleGroup.add(obstacle.spt);
    }
  }

  flag = createSprite(xPosition+50+100-50,350,100,100);
  flag.addImage("flag",flagImage);
  flag.scale=0.05;
  //pole1=createSprite(flag.x-100,350,35,displayHeight)
  //pole2=createSprite(flag.x+100,350,35,displayHeight)

}

function draw() 
{
  background('skyblue');  

  translate(-mario.spt.x + width/2, 0)

if (gameState===PLAY)
{

  mario.applyGravity();
  mario.spt.collide(platformGroup);

  if(keyDown("left"))
  {
    mario.moveLeft();
  }

  if(keyDown("right"))
  {
    mario.moveRight();
  }

  if(keyDown("up"))
  {
    mario.jump();
  }

  if (flag.isTouching(mario.spt))
  { 
    gameState=WIN;
  }
  if(obstacleGroup.isTouching(mario.spt) || mario.spt.y > height)
  {
    gameState = LOSE;
  }
}
if (gameState===WIN)
{
  
  textsize(30);
  text("You Win", mario.spt.x, 350);
  mario.spt.pause();
  obstacleGroup.destroyEach();
  mario.spt.setVelocity(0,0);
}


if (gameState===LOSE)
{
  textsize(30);
  text("You Lose", mario.spt.x, 350);
  mario.spt.pause();
  obstacleGroup.destroyEach();
  mario.spt.setVelocity(0,0);
}

  drawSprites();
}

