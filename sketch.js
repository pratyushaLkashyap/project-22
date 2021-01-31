const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

function preload()
{
   //preload the images here
   fairyImg = loadImage("images/fairy1.png");
   starImg = loadImage("images/star.png");
   staryNightImg = loadImage("images/starnight.png");
   fairyVoice = loadSound("sound/JoyMusic.mp3");
}

function setup() {
  createCanvas(800, 750);

  
 fairyVoice.play();

  fairy = createSprite(130,510);
   fairy.addImage(fairyImg);
   fairy.scale = 0.1;
  
   star = createSprite(650,30);
  star.addImage(starImg);
  star.scale = 0.2;

  engine = Engine.create();
  world = engine.world;

  
  starBody = Bodies.circle(650,30,5,{restitution:0.5,isStatic:true});
   World.add(world,starBody);


   Engine.run(engine);
}


function draw() {
  background(staryNightImg);

star.x = starBody.position.x
star.y= starBody.position.y

if(star.y > 470 && starBody.position.y > 470){
  Matter.Body.setStatic(starBody,true);
}



  drawSprites();
}
function keyPressed(){

  if(keyCode === RIGHT_ARROW){
     fairy.x = fairy.x + 20;
  }
  if(keyCode === LEFT_ARROW){
    fairy.x = fairy.x - 20;
 }

 if(keyCode === DOWN_ARROW){
 Matter.Body.setStatic(starBody,false);
}

}


