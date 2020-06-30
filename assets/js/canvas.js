var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d");

canvas.width = 2793;
canvas.height = 2793;


var background = new Image();
background.src = "assets/crystal.jpg";

background.onload = function(){
    ctx.drawImage(background,0,0);   
}