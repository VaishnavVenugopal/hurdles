var database;
var canvas,backgroungimage,gameState = 0,playerCount=0;
var form,player,game;
var allplayers;
var car1,car2,car3,car4,cars;
var car1img,car2img,car3img,car4img;
var track;



function preload(){
car1img = loadImage("images/car1.png");
car2img = loadImage("images/car2.png");
car3img = loadImage("images/car3.png");
car4img = loadImage("images/car4.png");
track = loadImage("images/track.jpg");


}


function setup(){
    
    canvas=createCanvas(displayWidth-20,displayHeight-30);
   
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
    console.log(displayWidth);
    console.log(displayHeight);
    
}

function draw(){
 background("white")   ;
 if(playerCount==4){
     game.update(1)
 }
 if(gameState==1){
     clear();
     game.play();
 }
 if(gameState==2){
     console.log("gameEnded")
 }
}
