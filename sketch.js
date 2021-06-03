//Create variables here
var dog ,happydog,database,foods,foodStock 
function preload()
{
  //load images here
  dogImage=loadImage("images/dogImg.png");
  happydog=loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500, 500);
  database=firebase.database();
  dog=createSprite(200,200,200,200);
 dog.addImage(dogImage)
 dog.scale=(0.5)
  foodStock=database.ref('Food');
  foodStock.on("value",readStock)
  
}


function draw() {  
 background(46,139,87)
 if(keyWentDown(UP_ARROW)){
   writeStock(foods)
   dog.addImage(happydog);
   
 }
 

if(foods==0){
  foods=20
}

  drawSprites();
  //add styles here
  fill ("black")
  textSize(35)
  text("Press UP_ARROW Key  To Feed the Milk",50,50)
  text("Food Remaning:"+foods,150,150)
  stroke(4)

}
function readStock(data){
  foods=data.val();
}
function writeStock(x){
  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}



