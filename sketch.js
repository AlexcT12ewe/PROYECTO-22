const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase, playerArcher;
var baseimage;
var arrow, board;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
  arcoimage = loadImage("./assets/playerArcher.png");
  flechaimage = loadImage("./assets/arrow.png");
  punteroimage = loadImage("./assets/board.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);

  //crear el cuerpo base del jugador
  var options = {
    isStatic: true
  };
  //crear el cuerpo del jugador
  playerBase = Bodies.rectangle(120, 350,180,150, options);
  World.add(world, playerBase);

  player = Bodies.rectangle(200,290,180,150, options);
  World.add(world,player);

  playerArcher = Bodies.rectangle(190,190,180,150, options);
  World.add(world,playerArcher);

  arrow = Bodies.rectangle(490,240,180,150, options);
  World.add(world,arrow);

  board = Bodies.rectangle(920, 200,180,150, options);
  World.add(world,board);


}

function draw() {
  background(backgroundImg);
  Engine.update(engine);

  //mostrar la imagen del jugador utilizando la función image()
  push();
  imageMode(CENTER);
  image(playerimage,player.position.x,player.position.y,60,180);
  pop();
   

  //mostrar la imagen de la base del jugador utilizando la función image()
   
  image(baseimage,playerBase.position.x,playerBase.position.y,180,150);

  image(arcoimage,playerArcher.position.x,playerArcher.position.y,140,130);

  image(flechaimage,arrow.position.x,arrow.position.y,140,20);

  image(punteroimage,board.position.x,board.position.y,180,150);
 

  // Título
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("TIRO CON ARCO ÉPICO", width / 2, 100);
}
