var image = document.querySelector("img");


function addTocka() {
    
    image.addEventListener("click", function (e) {
        var panda = document.createElement("span");
        panda.classList.add("tocka");
        panda.style.top = e.clientY + "px";
        panda.style.left = e.clientX + "px";
    })
}