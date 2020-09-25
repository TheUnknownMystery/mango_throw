
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var tree_1, ground_1, stone_1, boy_1, boy_img;
var mango_1, mango_2, mango_3, band_1;
function preload() {
  boy_img = loadImage("boy.png");
}

function setup() {
  createCanvas(800, 700);
  

  engine = Engine.create();

  world = engine.world;

  //making objects 

  tree_1 = new tree(500, 300, 300, 300);

  ground_1 = new ground(400, 596, 800, 20);

  stone_1 = new stoneObj(250, 700, 60, 60);

  mango_1 = new Mango(540, 400, 40, 40);

  mango_2 = new Mango(582, 330, 40, 40);

  mango_3 = new Mango(590, 370, 40, 40);

  mango_4 = new Mango(590, 430, 40, 40);

  boy_1 = new boy(200, 438, 100, 200)

  band_1 = new Band(boy_1.body, stone_1.body);

  // band_1 = new Band(boy_1.body,{x:200,y:100});

  Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background("lightgrey");

  drawSprites();

  tree_1.display();

  ground_1.display();

  stone_1.display();

  boy_1.display();

  mango_1.display();

  mango_2.display();

  mango_3.display();

  mango_4.display();

  boy_1.display();

  band_1.display();

}

function mouseDragged() {

  Matter.Body.setPosition(stone_1.body, { x: mouseX, y: mouseY });


}

function mouseReleased(){

 band_1.fly();

}



