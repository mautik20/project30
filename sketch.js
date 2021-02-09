const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball, rope

function setup() {
  createCanvas(800,500);
  engine = Engine.create();
  world = engine.world;
  roof=new Roof(405.5,280,148,10);
  roof1=new Roof(600,495,1200,10);
    //base one
  block1=new Block(445.5,260,20,30);
  block2=new Block(465.5,260,20,30);
  block3=new Block(345.5,260,20,30);
  block4=new Block(365.5,260,20,30);
  block5=new Block(385.5,260,20,30);
  block6=new Block(405.5,260,20,30);
  block7=new Block(425.5,260,20,30);
  
  //base two
  block8=new Block(365.5,230,20,30);
  block9=new Block(385.5,230,20,30);
  block10=new Block(405.5,230,20,30);
  block11=new Block(425.5,230,20,30);
  block12=new Block(445.5,230,20,30);
  //base three
  block13=new Block(385.5,200,20,30);
  block14=new Block(405.5,200,20,30);
  block15=new Block(425.5,200,20,30);
  //base four
  block16=new Block(405.5,170,20,30);

  ball = new Ball(200, 200, 30, 30);
  rope = new Rope(ball.body, { x: 210, y: 200});

  
}
function draw() {
  background("black");
  Engine.update(engine);
  roof.display();
  roof1.display();
    block1.display(); 
    block2.display(); 
    block3.display(); 
    block4.display(); 
    block5.display(); 
    block6.display(); 
    block7.display(); 
    block8.display(); 
    block9.display(); 
    block10.display(); 
    block11.display(); 
    block12.display(); 
    block13.display(); 
    block14.display(); 
    block15.display();   
    block16.display();
    ball.display();
    rope.display();
}


function mouseDragged() {
  Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
}

function mouseReleased(){
  rope.fly();
}

 
function keyPressed(){
  if(keyCode==32){
rope.attach(ball.body)
  }
} 