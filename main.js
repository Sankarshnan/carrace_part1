canvas = document.getElementById('myCanvas')
ctx = canvas.getContext("2d");

random_number = Math.floor(Math.random() *2);
console.log(random_number);
car1_width = 120;
car1_height = 70;
car1_image = "car 1.jpg";
car1_x = 550;
car1_y = 00;

car2_width = 120;
car2_height = 70;
car2_image = "car 2.jpg";
car2_x = 550;
car2_y = 60;
background_image = "https://www.researchgate.net/profile/Abdul-Jawad-3/publication/321156261/figure/fig3/AS:562401595662336@1511098397526/Trend-line.png";

function add()
{
  background_imgTag = new Image();
  background_imgTag.onload = uploadBackground;
  background_imgTag.src = background_image;


  car1_imgTag = new Image();
  car1_imgTag.onload = uploadcar1;
  car1_imgTag.src = car1_image;

  car2_imgTag = new Image();
  car2_imgTag.onload = uploadcar2;
  car2_imgTag.src = car2_image;
}

function uploadBackground()
{
    ctx.drawImage(background_imgTag, 0, 0,  canvas.width, canvas.height)
}

function uploadcar1()
{
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}

function uploadcar2()
{
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed)

if(keyPressed == '38')
      {
          car1_up();
          console.log("up");
      }
      if(keyPressed == '40')
      {
           car1_down();
           console.log("down");   
      }

      if(keyPressed == '37')
      {
           car1_left();
           console.log("left");
      }
      
      if(keyPressed == '39')
      {
           car1_right();
           console.log("right");
      }

      if(keyPressed == '87')
      {
           car2_up();
           console.log("Key pressed w: car2 up");
      }

      if(keyPressed == '83')
      {
           car2_down();
           console.log("Key pressed s: car2 down");
      }

      if(keyPressed == '65')
      {
           car2_left();
           console.log("Key pressed a: car2 left");
      }

      if(keyPressed == '68')
      {
           car2_right();
           console.log("Key pressed d: car2 right");
      }

    }
      function up()
{
    if(car1_x >=0)
    {
        car_x = car_x - block_image_height;
        console.log("block_image_height = " + block_image_height);
        console.log("When Up arrow key is pressed, X = " + car_x + " , Y ="+car_y);
        canvas.remove(car_object);
        car_update();
    }
}

function down()
{
    if(car_y <=500)
    {
        car_y = car_y + block_image_height;
        console.log("block_image_height = " + block_image_height);
        console.log("When Down arrow key is pressed, X = " + car_x + " , Y ="+car_y);
        canvas.remove(car_object);
        car_update();
    }
}

function left()
{
    if(car_x >0)
    {
        car_x = car_x - block_image_width;
        console.log("block_image_width = " + block_image_width);
        console.log("When Left arrow key is pressed, X = " + car_x + " , Y ="+car_y);
        canvas.remove(car_object);
        car_update();
    }

}

function right()
{
    if(car_x <=850)
    {
        car_x = car_x + block_image_width;
        console.log("block_image_width = " + block_image_width);
        console.log("When Right arrow key is pressed, X = " + car_x + " , Y ="+car_y);
        canvas.remove(car_object);
        car_update();
    }
}   