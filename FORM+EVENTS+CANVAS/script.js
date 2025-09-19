// first I will select my element
// let (variables), const(fixed data)
const canvas = document.getElementById("myCanvas");
//content
const ctx = canvas.getContext("2d");

// I want to change the color
// set current color

let currentColor = "Blue";


// create function to draw rectangle
function draw(){
    //If i have previos context or rectangle I want to clear
    ctx.clearRect(0,0, canvas.width, canvas.height); //clear previous
    ctx.fillStyle = currentColor;
    ctx.fillRect(100, 80, 250, 150) //it should be smaller than canvas

    //why I do not have the rectangle
    //because I did not call the function

    //press keys
    //eventlisterner?
    //it is a function that listens for even(click the button, key press, mouse move)
    //when these events happen we should run some code

    //element.addEventListener("name of event(click, mouseover, keydown, function")

    //event for press key is keydown
    // Modern Javascript function draw() {} ==> (event) => {};
    document.addEventListener("keydown", (event) => {
        // adds codes to run
        //I have (R, G, B, Y) options choices ===> switch(between option) switch (between keys)
        switch(event.key.toLowerCase())
        {
            case "r":
                currentColor = "red";
                break;
            case "g":
                currentColor = "green";
                break;
            case "b":
                currentColor = "blue";
                break
            case "y":
                currentColor = "yellow";
                break;
            default:
                currentColor = "blue";
                break
        }
    })
        draw();

}

