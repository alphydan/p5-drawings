
x = 20
y = 10
offset = 0
increase = 1
function setup() {
  createCanvas(1400, 750);

}

function draw(){
    background(0)
    noStroke()

    // dots
    for (var x = 20; x <= mouseX; x+=60) {

            for (var y = 10; y <= height; y+=60){
        fill( random(150), 30, random(150), random(200,255) )
        ellipse(x+random(2), y+random(1)+ offset, 20, 20 );
        }
     }

     offset += increase
     if (offset > 200 || offset < 0){
        increase += -2*increase
     }


    //  (x <= width ){

    //     y = 10
    //     while (y <= height){


    //     y += 30;
    // }

    //    x += 30;
    //    fill(20*150/sqrt(x), 15*150/sqrt(x), 20*150/sqrt(x))
    // }


}


