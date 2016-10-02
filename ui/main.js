console.log('Loaded!');
// change the main-text

var element =  document.getElementById("main-text");
element.innerHTML = "New Value";

//move image

var img  = document.getElementById("madi");
img.onclick = function() {
    var marginLeft = 10;
    function moveRight(){
        marginLeft = marginLeft + 10;
        img.style.marginLeft = marginLeft+'px';
    }
    var interval = setInterval(moveRight , 100);
    
};


var button = document.getElementById("button");

button.onclick =function(){
  
  
  counter= counter+1;
  var span = document.getElementById("count");
  span.innerHTML = countet.toString();
};