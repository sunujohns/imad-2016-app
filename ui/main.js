console.log('Loaded!');
// change the main-text

var element =  document.getElementById("main-text");
element.innerHTML = "New Value";

//move image

var img  = document.getElementById("madi");
img.onclick = function() {
    img.style.marginleft = '100px';
};