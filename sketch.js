var box1,box2
function setup() {
  createCanvas(800,400);
   box1 =createSprite(400, 200, 50, 85);
box2=createSprite(400,200,50,70)
box3=createSprite(200,400,50,70,)
box4=createSprite(300,200,70,50)
box1.shapeColor="pink"
box2.shapeColor="pink"
box3.shapeColor="pink"
box4.shapeColor="pink"
box1.debug=true
box2.debug=true
box3.debug=true
box4.debug=true
}

function draw() {
  background(0);  
console.log("hello")
  drawSprites();
  box1.x=mouseX
  box1.y=mouseY
 if (isTouching(box1,box2)){
  box1.shapeColor="yellow"
  box2.shapeColor="yellow"
 }
 else if(isTouching(box1,box3)){
   box1.shapeColor="yellow"
   box3.shapeColor="yellow"
 }
 else if (isTouching(box4)){
   box4.shapeColor="yellow"
   box1.shapeColor="yellow"
 }

 
  else{
    box1.shapeColor="pink"
    box2.shapeColor="pink"
    box3.shapeColor="pink"
    box4.shapeColor="pink"
  }
}
function isTouching(object1,object2){
  if(object1.x-object2.x<object1.width/2+object2.width/2 &&
    object2.x-object1.x<object1.width/2+object2.width/2 &&
    object1.y-object2.y<object1.height/2+object2.height/2 &&
    object2.y-object1.y<object1.height/2+object22.height/2){
      return true

    }
    else{
      return false
    }

}
