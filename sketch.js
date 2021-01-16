const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;





var engine, world;
var bblock8,block9,block10,block11,block12;
var block13, block14, block15, block16;
var bird, slingShot;
var count = 0;

function preload() {
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    block8 = new box(330,235,30,40);
    block9 = new box(360,235,30,40);
    block10 = new box(390,235,30,40);
    block11 = new box(420,235,30,40);
    block12 = new box(450,235,30,40);

    block13 = new box(360,235,30,40);
    block14 = new box(390,235,30,40);
    block15 = new box(420,235,30,40);

    block16 = new box(390,235,30,40);
     
    polygon = Bodies.circle(50,200,20);
    slingshot1 = new Slingshot(this.polygon,{c:100,y:200});

   
}

function draw(){
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
block13.display();
block14.display();
block15.display();
block16.display();
}
function mouseDragged(){
    Matter.Body.setPosition(hexagon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}