const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var snow;


function setup() {

  engine = Engine.create();
  world = engine.world;

  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  snow = new Snow({x:200, y:50});
}

function draw() {
  background(255,255,255);  
  drawSprites();

  snow.display();
}