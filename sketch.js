var bullet,speed,weight;
var wall,thickness;
var damage;

function setup() {
  createCanvas(1600,400);

  bullet=createSprite(50, 200, 100, 50);
  bullet.shapeColor="white";

  thickness=random(22,83);

  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=rgb(80,80,80);

  speed=random(223,321);
  weight=random(30,52);

  bullet.velocityX=speed;

}

function draw() {
  background("lightBlue");  

  damage= 0.5*weight*speed*speed/thickness/thickness/thickness;

  if(wall.width/2+bullet.width/2 > wall.x-bullet.x){
    bullet.velocityX=0;

    if(damage<=10){
      wall.shapeColor=rgb(0,255,0);
    } 
    
    if(damage>10){
      wall.shapeColor="red";
    }

  }

  drawSprites();

  textSize(20);
  textStyle(BOLD);
  fill("black");
  text("Speed: "+Math.round(speed),100,100);
  text("Weight: "+Math.round(weight),240,100);
  text("damage: "+Math.round(damage),520,100);
  text("thickness: "+Math.round(thickness),370,100);

}
