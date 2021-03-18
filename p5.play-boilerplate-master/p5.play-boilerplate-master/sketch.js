var car,wall,speed,weight

function setup() {
  createCanvas(1600,400);
  speed =random(55,90)
  weight =random(400,1500)
  wall=createSprite(1500,200,60,height/2)
  car=createSprite(50,200,50,50)
  car.velocityX=speed;


}

function draw() {
  background("white");
  
  if(wall.x-car.x<(car.width+wall.width)/2) {
  car.velocityX=0;
  var deform = 0.5*weight*speed^2/2250
  if(deform<100){
  car.shapeColor="green";
  }
  if(deform>100 && deform<180){
    car.shapeColor="yellow";
  }
  if(deform>180){
    car.shapeColor="red";
  }
}
  drawSprites();
}