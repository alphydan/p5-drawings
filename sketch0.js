
var ellipseH = 1000

function setup() {
  createCanvas(640, 480);
}

function draw(){

    ellipseH -=5

    if (ellipseH <=40){
        ellipseH += 5
    }

    background(220,220,220)

    // Body
    fill( 255, 204, 100 )
    rect(mouseX-20,150,40,80);

    // Head
    fill( 0, 0, 0 );
    ellipse(mouseX,130,ellipseH,ellipseH+5);
    fill( 255, 255, 255 );
    ellipse(mouseX,118+mouseX/30,6,8); // eye L
    ellipse(mouseX+10,118+mouseX/30,6,8); // eye R

    stroke(0,0,0);
    noFill();
    arc(mouseX+20, 142, 50, 50, 0, HALF_PI); // arm R
    arc(mouseX-20, 142, 50, 50, HALF_PI, PI); // arm L


    // legs
    line(mouseX-20,230,220+mouseX/2,280);
    line(mouseX+20,230,290+mouseX/2,280);

}

// function draw() {
//   if (mouseIsPressed) {
//     fill(100);
//   } else {
//     fill(255);
//   }
//   ellipse(mouseX, mouseY, 80, 80);
//   line(0,0,640,480)
//   line(640,0,0,480)
// }




// function setup() {

// }

// function draw() {
//      ellipse(50, 50, 80, 80);
//      rect(50,50,20,20);
//}
