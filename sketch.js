var movingrect
var fixedrect

function setup() {
  createCanvas(800,400);
  movingrect = createSprite(400,300,30,30);
  movingrect.shapeColor = "pink";
  fixedrect = createSprite(600,300,30,30);
  fixedrect.shapeColor = "red";
}

function draw() {
  background("black");
  movingrect.x = mouseX  ;
  movingrect.y = mouseY;


if(  movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2 &&
      fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2){
 movingrect.shapeColor = "yellow";
 fixedrect.shapeColor = "yellow"; 
}

else{movingrect.shapeColor = "pink";
     fixedrect.shapeColor = "red"}



  drawSprites();
}