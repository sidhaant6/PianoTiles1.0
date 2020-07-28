var bgImage, tiles
function preload(){
//bgImage= loadImage("1.png")
}

function setup(){
    createCanvas(550,450)
  Form1=new Form()
  classic= new Classic()
}
function draw(){
   // background(bgImage)
   background(255)
Form1.display();    
//classic.tiles();
}