var bullet, wall;
var speed, weight;
var thikness;
var damage;


function setup() {

  createCanvas(800,400);
  bullet= createSprite(100, 200, 50, 10);
  //bullet.debug=true;
  //wall.setCollider("rectangle", 0, 0, 20, 100);
  speed=23
  thickness = random(30, 100)
  //car.velocityX=speed;
  wall=createSprite(700, 200, thickness, height/2);
  wall.shapeColor="white";
  //wall.debug=true
  //wall.setCollider("circle", 0, 0, 10)
  
  weight=32;

  

  
}

function draw() {
  background("black");
  
  if (keyDown("space")){
    bullet.velocityX=speed;
  }
    
  if (hasCollided(bullet, wall)){

    bullet.velocityX = 0

    damage = 0.5*weight*speed**2/(thikness**3);

    if (damage>10){
      wall.shapeColor=color(255, 0, 0);
    }
  
  
    if (damage<10){
      wall.shapeColor=color(0, 255, 0);
    }
   
    

  }
  
  


  drawSprites();

}

function hasCollided(obgbullet, obgwall){
obgbulletRightEdge = obgbullet.x + obgbullet.width;
obgwallLeftEdge = obgwall.x;
if (obgbulletRightEdge>=obgwallLeftEdge){
  return true;
}
return false;
}