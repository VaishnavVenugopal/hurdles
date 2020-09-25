class Game{
    constructor(){

    }
    getState(){
        var gameStateRef=database.ref("gameState");
        gameStateRef.on("value",function(data){
            gameState = data.val();
        })
    }
    update(state){
        database.ref("/").update({
            gameState:state
        })

        
    }
    start(){
        if (gameState === 0){
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();
        }
        
        car1 = createSprite(200,100);
        car1.addImage(car1img);
        car2 = createSprite(200,300);
        car2.addImage(car2img);
        car3 = createSprite(200,500);
        car3.addImage(car3img);
        car4= createSprite(200,700);
        car4.addImage(car4img);
        cars=[car1,car2,car3,car4];
    }
    play(){
        form.hide();
        textSize(30);
        text("gameStart",120,100);
        background(rgb(198,135,103))
       
        
        Player.getAllplayers();
        console.log(allplayers);
        if(allplayers!=undefined){
            var x = 200,index = 0,y
            for(var plr in allplayers){
                index = index+1;
                x = x//displaywidth-allplayers[plr].distance;
                y= y+200;
                cars[index-1].x = x;
                cars [index-1].y = y;
                if(index==player.index){
                   fill("red");
                   ellipse(x,y,60,60);
                   // camera .position.x=cars[index-1].x;
                    //camera.position.y=cars[index-1].y;
                  
                }
                
            }
        }
        if(keyIsDown(RIGHT_ARROW)&&player.index!=null){
player.distance+=50;
player.update();

        }
        if(player.distance>3860){
            gameState=2;
        }
        drawSprites();
        
        
    }
        
    
}