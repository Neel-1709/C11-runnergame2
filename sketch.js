var player, player_runnning;
var path;
function preload(){
path = loadImage("path.png"); 
player_running = loadAnimation("Runner-1.png","Runner-2.png");

leftBoundary= createSprite(0,0,100,800);
leftBoundary.visible = false;

rightBoundary= createSprite(410,0,100,800);
rightBoundary.visible = false;

}


function setup(){
  createCanvas(400,400);

  player = createSprite(200,300);
  player.addAnimation("running", player_running);
  player.scale = 0.08;
  path = createSprite(200,200,);
  path.addImage("path.png");
  path.velocityY == 4;
  //create sprites here
}


function draw() {
  background(0);
  path.velocityY = 4;

  player.x = World.mouseX;

  edges=createEdgeSprites();
  player.collide(edges[3]);
  player.collide(leftBoundary);
  player.collide(rightBoundary);

  if (path.y > 400){
    path.y = height/2;

  }
drawSprites();
}
