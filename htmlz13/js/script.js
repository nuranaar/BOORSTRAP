var button = document.querySelector(".btn");
var nav = document.querySelector(".nav");
var list=document.querySelector(".nav ul");
button.onclick = btnClick;
function btnClick() {
    nav.classList.toggle("vjuxNav");
    list.style.opacity="1";
    list.style.transition="all 1s";

}