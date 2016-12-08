var jumpingdot = {
    x:320,
    y:240,
}

var b = 255;

function setup() {
  createCanvas(640, 480);
  background(0);
}

function draw(){
    noStroke();


    r = map(mouseX,0,640,0,255);
    g = map(mouseY,0,480,0,255);
    b = map(mouseX,640,0,0,255);

//    background(r,g,b);

    // fill(200,200,200);
    // ellipse(mouseX, mouseY, 60, 30);

    fill(100*random(0,2),jumpingdot.y,jumpingdot.y,80);
    ellipse(jumpingdot.x, jumpingdot.y,10,10);

    jumpingdot.x += random(-20,20);
    jumpingdot.y += random(-20,20);

    if (jumpingdot.x > width){
        // println("off screen");
        jumpingdot.x = width/2;
    } else if (jumpingdot.y > height){
        jumpingdot.y = height/2
    }

}


