var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;

var engine;
var world;
var box1;

function setup(){
    createCanvas(1000,1000);
    engine = Engine.create();
    world = engine.world;
    box = Bodies.rectangle(200,100,80,80);
    Engine.run(engine);
    World.add(world, box1);
} 

function draw(){
    background(51);
    
    rect(box1.position.x, box1.position.y, 80, 80);
}