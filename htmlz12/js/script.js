var sanie = document.querySelector(".sanieEgrebi");



function clockFunc() {
    var now = new Date();
    var seconds = now.getSeconds();
    var rotate = 90 + seconds * 6;
    var rotate2 = rotate+6;
    sanie.style.transform = "rotate(" + rotate2 + "deg)";

}
setInterval(clockFunc, 1000);



// var obj = {
//     metod1: function () {

//         console.log("metod1")
//         return this;
//     },
//     metod2: function () {

//         console.log("metod2")
//         return this;
//     }
// }

// obj.metod1().metod2();
// obj.metod2().metod1();



// function elementSelector(selector, stylePorp, styleValue){
//     var elem =document.querySelector(selector);
//     elem.setAttribute("style", stylePorp +":" +styleValue)
//     return elem;
// }
// elementSelector(".box","border-radius", "100%")


// function elementSelector(selector, stylesObj) {
//     var elem = document.querySelector(selector);
//     for (var prop in stylesObj) {
//         for (var globalProp in elem.style) {
//             if (prop == globalProp) {
//                 elem.style[prop] = stylesObj[prop]
//             }
//         }
//     }

//     return elem;
// }
// elementSelector(".box", {
//     width:"200px",
//     margin:"100px"
// })



