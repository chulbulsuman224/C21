var fixedrect,movingrect;
var gameobject1,gameobject2,gameobject3,gameobject4;
var fixedrect1,movingrect1;
function setup() {
  createCanvas(1200,800);
 
  movingrect=createSprite(400,200,80,30);
  movingrect.shapeColor="green";
 
  
  gameobject1=createSprite(100,100,50,50);
  gameobject1.shapeColor="green";
  gameobject2=createSprite(200,100,50,50);
  gameobject2.shapeColor="green";
  gameobject3=createSprite(300,100,50,50);
  gameobject3.shapeColor="green";
  gameobject4=createSprite(400,100,50,50);
  gameobject4.shapeColor="green";

  fixedrect1=createSprite(600,100,50,80);
  fixedrect1.shapeColor="blue";
  movingrect1=createSprite(600,800,50,30);
  movingrect1.shapeColor="blue";

  movingrect1.velocityY=-5;
  fixedrect1.velocityY=5;

}

function draw() {
  background("black");  
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;

  if(isTouching(movingrect,gameobject1)===true){

    movingrect.shapeColor="red";
    gameobject1.shapeColor="red";
  }
else{
  movingrect.shapeColor="green";
  gameobject1.shapeColor="green"
}






bounceOff(movingrect1,fixedrect1)





  drawSprites();
}

function isTouching(object1,object2){
  if(object1.x-object2.x<object2.width/2+object1.width/2
    &&  object2.x-object1.x<object2.width/2+object1.width/2
    && object1.y-object2.y<object2.height/2+object1.height/2
   && object2.y-object1.y<object2.height/2+object1.height/2){
     return true
   }
   else{
     return false
   }

}

function bounceOff(object1,object2){
  if(object1.x-object2.x<object2.width/2+object1.width/2
    &&  object2.x-object1.x<object2.width/2+object1.width/2){
      object1.velocityX=object1.velocityX*(-1);
      object2.velocityX=object2.velocityX*(-1);
      
    }
    if(object1.y-object2.y<object2.height/2+object1.height/2
      &&  object2.y-object1.y<object2.height/2+object1.height/2){
        object1.velocityY=object1.velocityY*(-1);
        object2.velocityY=object2.velocityY*(-1);
        
      }
}
