const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200, 0, 40, 40);
GRound = new Ground();
    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    GRound.display();

}