var imageArr = ["img/1.jpg", "img/2.jpg", "img/3.jpg"];
var artim = 0;

function prevFunc() {
    var myImg = document.getElementsByTagName("img")[0];
    artim--;
    myImg.setAttribute("src", imageArr[artim]);
    console.log(artim);
}
function nextFunc() {
    var myImg = document.getElementsByTagName("img")[0];
    artim++;
    myImg.setAttribute("src", imageArr[artim]);
    console.log(artim);

}