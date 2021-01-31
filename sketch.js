var canvas;
var music;
var block1, block2, block3, block4;
var edges, box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    block1 = createSprite(60,590, 210,20);
    block1.shapeColor = 'red';
    block2 = createSprite(270,590, 205,20);
    block2.shapeColor = 'green';
    block3 = createSprite(480,590, 210,20);
    block3.shapeColor = 'violet';
    block4 = createSprite(690,590, 205,20);
    block4.shapeColor = 'orange';

    //create box sprite and give velocity
    box = createSprite(Math.round(random(30,750)),300,30,30);
    box.shapeColor = 'white';
    box.velocityX = 1;
    box.velocityY = 3;
}

function draw() {
    background(180);
    //create edgeSprites
    edges = createEdgeSprites();
    box.bounceOff(edges);    
    //add condition to check if box touching surface and make it box
    if (block1.isTouching(box)&& box.bounceOff(block1)){
        box.shapeColor = 'red';
        music.play();
    }
    if (block2.isTouching(box)&& box.bounceOff(block2)){
        box.shapeColor = 'green';
        box.velocityX = 0;
        box.velocityY = 0;
        music.stop();
        }
    if (block3.isTouching(box)&& box.bounceOff(block3)){
        box.shapeColor= 'violet';
        music.play();
        }
    if (block4.isTouching(box)&& box.bounceOff(block4)){
        box.shapeColor ='orange';
        music.play();
        }
            drawSprites();
}
