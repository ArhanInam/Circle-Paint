var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;


canvas= document.getElementById("mycanvas");
ctx= canvas.getContext("2d");
color= "red";
width_of_line= 10;


canvas.addEventListener("mouseDown" , my_mouseDown);
function my_mouseDown(e){
    canvas= document.getElementById("color").value
    mouseEvent = "mouseDown";
}


canvas.addEventListener("mouseUp" , my_mouseUp);
function my_mouseUp(e){
    mouseEvent = "mouseUp";
}


canvas.addEventListener("mouseLeave" , my_mouseLeave);
function my_mouseLeave(e){
    mouseEvent = "mouseLeave";
}


canvas.addEventListener("mouseMove" , my_mouseMove);

function my_mouseMove(e){
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius, 0, 2*Math.PI);
        ctx.stroke();
    }
    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y; 
}