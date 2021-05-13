var canvas = new fabric.Canvas('myCanvas');

block_height = 40;
block_width = 40;

player_x = 10;
player_y = 10;

player_object = Img;
block_object = Img;

function player_update() {
    fabric.img.formURL("player.png", function(Img){
     
        player_object.scaletoWidth(150);
        player_object.caletoHeight(140);
              player_object.set({
                  top:player_y,
                  left:player_x
 
              });
             canvas.add(player_object);
            });

    
}

function newimage(get_image)
{
    fabric.img.formURL(get_image, function(Img){
     
        block_image_object.scaletoWidth(block_width);
        block_image_object.caletoHeight(block_height);
        block_image_object.set({
                  top:player_y,
                  left:player_x
 
              });
             canvas.add(block_image_object);
            });

}

   canvas.addEventlistner("keydown", my_keydown);

             function my_keydown(e){
                         
                keyPressed = e.keycode;
                if(e.shiftKey == true && keyPressed == '80')
                {
                   console.log("P and Shift pressed togather");
                     block_width = block_width + 10;
                     block_height = block_height + 10;

                     document.getElementById("current_width").innerHTML = block_width;
                     document.getElementById("current_height").innerHTML = block_height
                    
                }


                if(e.shiftKey == true && keyPressed == '80')
                {
                   console.log("M and Shift pressed togather");
                     block_width = block_width - 10;
                     block_height = block_height - 10;

                     document.getElementById("current_width").innerHTML = block_width;
                     document.getElementById("current_height").innerHTML = block_height
                    
                }
                
                if(keyPressed == '70'){
                   
                    newimage('ironman_face.png');
                    console.log("f");
     
                 }

                 if(keyPressed == '66'){
                   
                    newimage('hulkbody.png');
                    console.log("b");
     
                 }

                 if(keyPressed == '78'){
                    
                    newimage('spiderman_legs.png');
                    console.log("l");
     
                 }
                 
                 if(keyPressed == '82'){
                    
                    newimage('thor_right_hand.png');
                    console.log("r");
     
                 }

                 if(keyPressed == '72'){
                    
                    newimage('captain_america_left_hand.png');
                    console.log("h");
     
                 }

                 if(keyPressed == '38'){
                    
                    up();
                    console.log("up");
     
                 }

                 if(keyPressed == '40'){
                    
                    down();
                    console.log("down");
     
                 }

                 if(keyPressed == '37'){
                    
                    left();
                    console.log("left");
     
                 }

                 if(keyPressed == '39'){
                    
                    right();
                    console.log("right");
     
                 }
                }