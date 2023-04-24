
var  eye = document.getElementsByClassName("eye-ball");
document.onmousemove = function(){
var width = window.innerWidth;
var x = event.clientX;
var a = x / width;
a= a *100;
var height = window.innerHeight;
var y = event.clientY;
var b = y / height;
b= b *100;
eye[0].style.cssText = "left: " + a + "%; top: " + b + "%;" + "transform:translate(-"+a+"%,-"+b+"%)";
eye[1].style.cssText = "left: " + a + "%; top: " + b + "%;" + "transform:translate(-"+a+"%,-"+b+"%)"; 
}
