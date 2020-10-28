const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var ground;
var pig1,pig2;
var bird;
var log1,log2,log3,log4;




function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(900,500,70,70)
    box2 = new Box(700,500,70,70)
    ground = new Ground(600,590,1200,30)
    pig1  = new Pig(800,500)
    log1 = new log (800,400,280,PI/2)

    box3 = new Box(900,350,70,70)
    box4 = new Box(700,350,70,70)
    pig2 = new Pig(800,350)
    log2 = new log(800,250,280,PI/2)

    box5 = new Box(800,200,70,70)
    log3 = new log(760,160,200,PI/7)
    log4 = new log(840,160,200,-PI/7)

    bird = new Bird(100,50)
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    bird.display();
}