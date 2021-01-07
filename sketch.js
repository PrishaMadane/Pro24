const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperObj,groundObj;
var world; 
var groundObbj;


function preload()
{
	dustbinImg=loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1000, 700);
  rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

  
  paperObj= new paper(200,400,15);
  
 
  Imgdisplay = createSprite(740,570,10,10);
  Imgdisplay.addImage(dustbinImg);
  Imgdisplay.scale=0.5;
  boxdust = new dustbinn (740,630,130,18);
  boxdust1 = new dustbinn (680,590,18,100);
  boxdust2 = new dustbinn (800,590,18,100);
  groundObj = new ground(500,660,2000,20);
  Engine.run(engine);
}

function draw() {
  Engine.update(engine);
  background(170);
 
  groundObj.display();
  Imgdisplay.display();
  paperObj.display();
  drawSprites();

}

function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(paperObj.body,paperObj.body.position,{x:20,y:-20});
  }
}
