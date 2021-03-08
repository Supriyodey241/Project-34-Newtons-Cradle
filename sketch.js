const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var sling1,sling2,sling3,sling4,sling5;
var rod;

function setup(){
  createCanvas(800,700);
  engine = Engine.create();
  world = engine.world;

  bob1 = new Pendulum(340, 450, "#00b0ff"); 
  bob2 = new Pendulum(400, 450, "#e91e63");
  bob3 = new Pendulum(460, 450, "#ffc107"); 
  bob4 = new Pendulum(520, 450, "#e91e63"); 
  bob5 = new Pendulum(580, 450, "#00b0ff"); 
   
  sling1 = new Sling(bob1.body, { x: 280, y: 200 });
  sling2 = new Sling(bob2.body, { x: 340, y: 200 });
  sling3 = new Sling(bob3.body, { x: 400, y: 200 }); 
  sling4 = new Sling(bob4.body, { x: 460, y: 200 }); 
  sling5 = new Sling(bob5.body, { x: 520, y: 200 });

  rod = new Roof(400,200,300,100);

  Engine.run(engine);

}

function draw(){
  rectMode(CENTER);
  background(220);
  Engine.update(engine);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();

  rod.display();

  drawSprites();

}

function mouseDragged(){
  Matter.Body.setPosition(bob1.body, {x: mouseX, y:mouseY});
}