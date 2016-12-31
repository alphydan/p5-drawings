function setup() {
    createCanvas(600, 1000);
    rectMode(CENTER);
}

function draw(){
    background(240);

translate(width/2, height/2);

push();
translate(50, 50);
rotate(PI/3);
quad(-25, -25, -25, 25, 25, 25, 25, -25);
pop();

push();
translate(50, 50);
rotate(2*PI/3);
quad(-25, -25, -25, 25, 25, 25, 25, -25);
pop();

push();
translate(50, 50);
rotate(-3*PI/3);
quad(-25, -25, -25, 25, 25, 25, 25, -25);
pop();


}
