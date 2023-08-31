var bg,form,system,code,security;
var score=0;

function preload() {
  bg = loadImage("./assets/Background.jpg");
}

function setup() {
  createCanvas(1000,500);
}

function draw() {
  background(bg);
  questions();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);

  drawSprites()
}