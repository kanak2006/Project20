var cat,catImage;
var mouse;
var garden,gardenImage;

function preload() {
    //load the images here
catImage=loadImage("images/cat1.png")
gardenImage=loadImage("images/garden.png")
mouseImage=loadImage("images/mouse1.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(700,400,20,20);
    cat.addImage(catImage);
    cat.scale=0.5;
    mouse = createSprite(100,200,10,10);
    mouse.addImage(mouseImage);
    mouse.scale=0.3;
garden = createSprite(480,500,20,20);
garden.addImage(gardenImage);
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
