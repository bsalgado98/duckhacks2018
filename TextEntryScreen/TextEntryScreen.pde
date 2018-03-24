import fisica.*;

FWorld world;
PFont font;

void setup(){
  fullScreen();
  
  Fisica.init(this);
  
  world = new FWorld();
  world.setEdges(this, color(120));
  world.setGravity(0, 500);
  
  Texto t = new Texto("Type and Enter");
  t.setPosition(width/2, height/2);
  t.setRotation(random(-1, 1));
  t.setFill(255);
  t.setNoStroke();
  t.setRestitution(0.75);
  world.add(t);
}

void draw(){
  background(120);
  
  world.step();
  world.draw(this);
}