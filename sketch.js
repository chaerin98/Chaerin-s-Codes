var size = 5;
function setup(){
 createCanvas(1200, 900);
 background(0);
}
function draw(){
   if (mouseIsPressed){
     if (keyIsPressed){
       frameRate(10);
     }
     
     else  frameRate(60);
     
     var a = int(random(1, 10));
    
     if (a == 1){
       fill(0, 255, 187);
     }
     else if (a == 2){
       fill(102, 255, 102);
     }
     else if (a == 3){
       fill(204, 0, 255);
     }
     else if (a == 4){
       fill(051, 255, 255);
     }
     else if (a == 5){
       fill(255, 255, 0);
     }
     else if (a == 6){
       fill(0, 0, 255);
     }
    
     ellipse(mouseX, mouseY, size, size);
     size = size + 0.5;
    
 
  }
  else  size=5;
 
  
}
