const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var engine,world;

function setup() {
  createCanvas(800,700);
 
 engine = Engine.create();
 world = engine.world;
 
 //creating bdies
 paper = new Paper(100,600,30);

 ground = new Ground(400,680,800,20);

leftSide = new Dustbin(550,620,20,100);
bottom = new Dustbin(610,660,100,20);
rightSide = new Dustbin(670,620,20,100);
slingshot=new Slingshot(paper.body,{x:100,y:500})
     Engine.run(engine);


}

function draw() {
  rectMode(CENTER);


  background("lightgrey");

  Engine.update(engine);


 
  ground.display();
  leftSide.display();
  bottom.display();
  rightSide.display();
  paper.display();
 slingshot.display();

}


function mouseDragged(){
  Matter.Body.setPosition(paper.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  slingshot.fly();
}