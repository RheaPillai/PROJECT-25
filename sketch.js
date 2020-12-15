
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin,ground,paper


function setup() {
	var canvas =createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 ground=new Ground(width/2,height-20,800,20)

 paper = new Paper(100,600,70)

 dustbin = new Dustbin(600,600)



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

 
  paper.display()
  dustbin.display()
  ground.display()
  

 
}
function keyPressed(){
  if(keyCode===UP_ARROW){
  Matter.Body.applyForce(paper.body,paper.body.position,{x:100,y:-180})

  }

}



