// var divs = [
//     {
//         width: 300,
//         bgColor: "red",
//         height: 100,
//     },
//     {
//         width: 100,
//         bgColor: "blue",
//         height: 100,
//     },
//     {
//         width: 400,
//         bgColor: "black",
//         height: 200,
//     },
//     {
//         width: 100,
//         bgColor: "grey",
//         height: 300,
//     }
// ]
// document.write(`<div class="box">`);
// divs.forEach(function (value) {
//     document.write(`<div style="width:${value.width}px; background-color:${value.bgColor}; height:${value.height}px "></div>`);
// });

// document.write(`</div>`)
var numbers = [12, 24, 25, 46, 27, 12, 24];
function remove(numbers, num) {
    for (var i = 0; i < numbers.length; i++) {
        if(num==numbers[i]){
            numbers.splice(numbers.indexOf(num),1);
        }
    }
    return numbers
}
console.log(remove(numbers, 12));