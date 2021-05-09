var road;

function preload(){
roadImg = loadImage("Road.png");
}

function setup(){
createCanvas(windowWidth-20, windowHeight-20);

road = createSprite(width/2, height/2);
road.addImage(roadImg);
road.scale = 0.15;
}

function draw(){

drawSprites();
}