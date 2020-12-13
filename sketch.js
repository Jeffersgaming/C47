
function preload() {
  bg = loadImage("Road.jpg");
  enemy = loadImage("enemy.jpg");
  player = loadImage("Player_avatar.png");
}

function setup() {
 createCanvas(windowWidth, windowHeight);
 abc = createSprite(windowWidth/2, windowHeight/2)
 abc.addImage("bg", bg);
 abc.scale = 11
 player = createSprite(windowWidth/2, windowHeight-50);
// player.addImage("player", player);
 player.velocityY = -6
  
}

function draw() {
  background(0);
  console.log(abc.x);
  // image(bg, 0, -windowHeight*2, windowWidth, windowHeight*4)  
 if(player.y<0){
   player.y = windowHeight
 }
camera.y = player.y-400
player.x = mouseX
spawnEnemy();
  drawSprites();
  
}
function spawnEnemy() {
  if(World.frameCount % 200 === 0) {
    var rand = Math.round(random(50, windowWidth-50));
    var enemy = createSprite(rand,0,100,100);
    enemy.velocityY = -4;
    
   // enemy.addImage("enemy", enemy);
           
    enemy.scale = 0.5;
    enemy.lifetime = 300;
  }
}