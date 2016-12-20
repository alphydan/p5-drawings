var Axon0 = {
    X : 320, Y : 460,
    sizeX : 30, sizeY : 30,
    R : 200, G : 200, B : 200,
};

var AxonL = {
    X : 310, Y : 460,
    sizeX : 30, sizeY : 30,
    R : 200, G : 200, B : 200,
};

var AxonR = {
    X : 320, Y : 462,
    sizeX : 30, sizeY : 30,
    R : 200, G : 200, B : 200,
};

var AxonBR = {
    X : 340, Y: 500,
    sizeX : 0, sizeY : 0,
     }



function setup() {
  createCanvas(640, 480);
  background(0)
}

function draw(){
    noStroke()



    // Vertical Axon0
    ellipse(Axon0.X, Axon0.Y, Axon0.sizeX, Axon0.sizeY)
    Axon0.X = Axon0.X - 1 + random(2)
    Axon0.Y = Axon0.Y - 2
    Axon0.sizeX = Axon0.sizeX/(1+0.8*random(0.1))+random(0.2)
    Axon0.sizeY = Axon0.sizeY/(1+0.8*random(0.1))+random(0.2)


    // Left AxonL
    ellipse(AxonL.X, AxonL.Y, AxonL.sizeX, AxonL.sizeY)
    AxonL.X = AxonL.X - 2 + random(2)
    AxonL.Y = AxonL.Y - 1+2.1*random(-1,1)
    AxonL.sizeX = AxonL.sizeX/(1+0.5*random(0.1))+random(0.2)
    AxonL.sizeY = AxonL.sizeY/(1+0.5*random(0.1))+random(0.2)

    // Right AxonR
    ellipse(AxonR.X, AxonR.Y, AxonR.sizeX, AxonR.sizeY)
    AxonR.X = AxonR.X + 2 + random(2)
    AxonR.Y = AxonR.Y - 1+1*random([0,0,0,0,2,-2])
    AxonR.sizeX = AxonR.sizeX/(1+0.5*random(0.1))+random(0.2)
    AxonR.sizeY = AxonR.sizeY/(1+0.5*random(0.1))+random(0.2)

    // First AxonR Branch
    // ellipse(AxonBR.X, AxonBR.Y, AxonBR.sizeX, AxonBR.sizeY)
    // if (AxonR.X = 420){
    //     AxonBR.X = AxonR.X;
    //     AxonBR.Y = AxonR.Y;
    //     AxonBR.sizeX = AxonR.sizeX;
    //     AxonBR.sizeY = AxonR.sizeY;
    // }



}


