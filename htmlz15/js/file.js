var button = document.querySelector("button");


button.addEventListener("click", function () {

    var popup = document.createElement("div");
    popup.classList.add("popup");
    var item = document.createElement("div");
    item.classList.add("item");
    item.innerHTML = `<h1>POPUP</h1>`;
    var icon = document.createElement("div");
    icon.classList.add("icon");
    icon.innerHTML=`<i class="fas fa-times-circle"></i>`;
    item.appendChild(icon);
    popup.appendChild(item);
    
    document.querySelector("body").appendChild(popup);

    icon.addEventListener("click", function(){
        popup.remove();
    });
    

});