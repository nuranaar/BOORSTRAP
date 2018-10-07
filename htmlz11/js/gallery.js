

var fotoGallery = ["img/1.jpg",
    "img/2.jpg",
    "img/3.jpg",
    "img/4.jpg",
    "img/5.jpg",
    "img/6.jpg"
]

function createGal(arrnum){
    var image =document.createElement("img");
    image.setAttribute("class", "fotogal");
    image.classList.add("mx-3")
    image.setAttribute("src", fotoGallery[i] )
    image.style.height = 100 + "px";
    document.body.appendChild(image);

}

for (var i=0; i<fotoGallery.length; i++){
    createGal(i);
}








// var elemwidth = 100;
// function createElem(artim) {
//     var div = document.createElement("div");
//     div.setAttribute("class", "box");
//     div.classList.add("my-3");
//     div.style.width = elemwidth + "px";
//     div.innerHTML = artim + "-inci kvadrat";
//     elemwidth += 30;
//     document.body.appendChild(div);
// }

// // for (var i = 0; i < 50; i++) {
//     createElem(i);
// }

// var cardStatus = true;
// function slideToogle(elem) {
//     if (cardStatus) {
//         elem.nextElementSibling.style.display = 'block'
//         cardStatus = false;
//     }
//     else {
//         elem.nextElementSibling.style.display = 'none'
//         cardStatus = true;

//     }
// }