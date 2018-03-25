var Engine = Matter.Engine,
  // Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies;

var engine;
var world;
var box1;

var ground;

function setup() {
  createCanvas(400, 400);
  engine = Engine.create();
  world = engine.world;
  //Engine.run(engine);
  var options = {
    isStatic: true
  }
  ground = Bodies.rectangle(200, height, width, 100, options);

  World.add(world, ground);
    
    box1 = new Box(width/2, height/2, 40, 40);
}

// function keyPressed() {
//   if (key == ' ') {
//   }
// }

function mousePressed() {
  boxes.push(new Box(mouseX, mouseY, random(10, 40), random(10, 40)));
}

function draw() {
  background(51);
  Engine.update(engine);
  box1.show;
  noStroke(255);
  fill(170,30,50);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, width, 100);

}