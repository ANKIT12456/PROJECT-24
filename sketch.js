
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,box1,box2,box3,ball;
var world,engine;

function preload()
{
	
}

function setup() {
	createCanvas(900, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new BOX(450,400,900,40);
	box1=new BOX(600,325,20,100);
	box2=new BOX(800,325,20,100);
	box3=new BOX(700,365,180,20);
	ball=new BALL(200,360);

    

	Engine.run(engine);
    press();
}


function draw() {
  //rectMode(CENTER);
  background(0);
  
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  ball.present();
//	 press();
  drawSprites();
  press();
}


function press(){
if(keyCode===UP_ARROW){
	Body.applyForce(ball.body,ball.body.position,{x:80,y:-70});
}
}


