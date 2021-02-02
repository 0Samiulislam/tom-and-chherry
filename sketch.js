var bg,tom,tomImage1,tomImage2,tomImage3,tomImage4;
function preload() {
    //load the images here
    bg=loadImage("images/garden.png");
    tomImage1=loadAnimation("images/cat1.png");
    tomImage2=loadAnimation("images/cat2.png");
    tomImage3=loadAnimation("images/cat3.png");
    tomImage4=loadAnimation("images/cat4.png");


}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom= createSprite(870,600)
    tom.addAnimation("tomSleeping",tomImage1);
    tom.scale=0.2;


}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
