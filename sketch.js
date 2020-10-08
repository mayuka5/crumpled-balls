
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var paper,ground,dustbin;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 paper=new Paper(100,350,20);
	 ground=new Ground(400,height,800,20);
     dustbin=new Dustbin(1000,680);

}


function draw() {
	
  
  background(0);
  Engine.update(engine);
  ground.display();
  paper.display();
  dustbin.display();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
		}

	}