
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground = Bodies.rectangle(400,680,800,10,{
	isStatic : true
})
World.add(world,ground)
wall1 = Bodies.rectangle(600,630,10,100,{
	isStatic : true
})
World.add(world,wall1)
wall2 = Bodies.rectangle(750,630,10,100,{
	isStatic : true
})
World.add(world,wall2)
ball = Bodies.circle(100,600,20,20)
World.add(world,ball)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 rectMode(CENTER);
 ellipseMode(RADIUS);
 rect(ground.position.x,ground.position.y,800,10)
 rect(wall1.position.x,wall1.position.y,10,100)
 rect(wall2.position.x,wall2.position.y,10,100)
 ellipse(ball.position.x,ball.position.y,20,20)
}
function keyPressed(){
	if (keyCode === UP_ARROW){

		Matter.Body.applyForce(ball,{x:0, y:0},{x:0.05 , y:-0.06})
	}
}




