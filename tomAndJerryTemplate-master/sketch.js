var cat,catImg;
var mouse;


function preload() {
    //load the images here
catImg=loadImg("cat1.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat = createSprite(500,400,20,20);
catImg.addImg=("cat",catImg);
mouse = createSprite(100,200,10,10);
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
