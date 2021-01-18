//create variables to store sprites
var canvas, music;
var surface1, surface2, surface3, surface4;
var invSurface1, invSurface2, invSurface3, invSurface4;

function preload(){    
    //load sounds
    //music = loadSound("music.mp3");
    music = loadSound("music.mp3");
}

function setup(){
    //create the canvas
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1 = createSprite(100, 590, 200, 20);
    surface1.shapeColor = "blue";
    surface2 = createSprite(300, 590, 200, 20);
    surface2.shapeColor = "orange";
    surface3 = createSprite(500, 590, 200, 20);
    surface3.shapeColor = "purple";
    surface4 = createSprite(700, 590, 200, 20);
    surface4.shapeColor = "green";

    //create box sprite and give velocity
    movingBox = createSprite(random(20, 750), 20, 30, 30);
    movingBox.shapeColor = "white";
    movingBox.velocityX = 10;
    movingBox.velocityY = 5;

    //create 3 invisible Surfaces
    invSurface1 = createSprite(0, 300, 1, 600);
    invSurface2 = createSprite(400, 0, 800, 1);
    invSurface3 = createSprite(800, 300, 1, 600);

    
}

function draw() {
    //clear the screen
    background(rgb(169,169,169));
   
    //make the ball to change the colour when it touches the surfaces
    if(surface1.isTouching(movingBox) && movingBox.bounceOff(surface1)){
      movingBox.shapeColor = "blue";
      music.play();
    }

    if(surface2.isTouching(movingBox) && movingBox.bounceOff(surface2)){
      movingBox.shapeColor = "orange"; 
      movingBox.velocityX = 0;
      movingBox.velocityY = 0;
      music.stop();
    }

    if(surface3.isTouching(movingBox) && movingBox.bounceOff(surface3)){
      movingBox.shapeColor = "purple";
      music.play();
    }

    if(surface4.isTouching(movingBox) && movingBox.bounceOff(surface4)){
      movingBox.shapeColor = "green";
      music.play();
    }     

    //console.log(movingBox.y);

    //make the ball bounce off from sprites
    movingBox.bounceOff(invSurface1);
    movingBox.bounceOff(invSurface2);
    movingBox.bounceOff(invSurface3); 
    
    //display sprites
    drawSprites();
}