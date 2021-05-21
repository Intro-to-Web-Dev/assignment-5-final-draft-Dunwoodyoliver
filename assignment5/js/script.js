/* Uses the Dom when finding the header and the body elements. I also use the DOM to find the elements to add 
 * The event listeners.
 */


function changeColor(color){  
    document.getElementsByTagName("header")[0].style.backgroundColor = color; //this is my array
    var background = document.getElementsByTagName("body")[0];
    var backgroundColor = null;
    if(color == "green"){
        backgroundColor = "red";
    }else if (color == "blue"){
        backgroundColor = "orange";
    }else if (color == "red"){
        backgroundColor = "green";
    }else if (color == "yellow"){
        backgroundColor = "purple";
    }else if (color == "orange"){
        backgroundColor = "blue";
    }
    background.style.backgroundColor = backgroundColor;
}

document.getElementById("home").addEventListener("mouseover", function(){
    changeColor("green");
}, false);
document.getElementById("stats").addEventListener("mouseover", function(){
    changeColor("blue");
}, false);
document.getElementById("class").addEventListener("mouseover", function(){
    changeColor("red");
}, false);
document.getElementById("map").addEventListener("mouseover", function(){
    changeColor("yellow");
}, false);
document.getElementById("callout").addEventListener("mouseover", function(){
    changeColor("orange");
}, false);