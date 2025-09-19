const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

let i = 0;
let j = 0;
let lastSquare = null;//to track last square

let maxSquareFitInCanvasVertically = 10; //columns
let maxSquareFitInCanvasHoriziontally = 10; // rows

let squareHeight = 50;
let squareWidth = 50;

let HeightColorStep = 255/maxSquareFitInCanvasVertically;
let widthColorStep = 255/maxSquareFitInCanvasHoriziontally;


stack = [] //to store the locations of the square

function drawNext() {
  //25.5 is 255/10 -> the total width= 10 squares, total height= 10 squares
  // blue color is not changing, only red and green, as the loop continues, 
  //they proceed to be darker.
  ctx.fillStyle = `rgb(
    ${Math.floor(255 - HeightColorStep * i)}
    ${Math.floor(255 - widthColorStep * j)},
    0)`;
  
  ctx.fillRect(j * squareWidth, i * squareHeight, squareWidth, squareHeight);

  lastSquare = { x: j * squareWidth, y: i * squareHeight, w: squareWidth, h: squareHeight };
  stack.push(lastSquare);// pushes the last square done into the stack

  j++;
  //if the width reaches more than 10, go to the next line
  if (j >= maxSquareFitInCanvasHoriziontally) {
    j = 0;// set it to beginning of the line
    i++;// next line
  }
}
//eventlistener to listen for keys 
document.addEventListener("keydown", (event) => {
if (event.key === " "){
  if (i < maxSquareFitInCanvasVertically)// this condition is to stop drawing more than the size of canvas, only 10 lines fit
    drawNext();
}
else if (event.key === "Delete"){
  let squareToClean = stack.pop();//to pop he last square and assign it to squareToClean
  if(i >= 0 & j >= 0){//this condition is to stop deleting beyond the size of canvas
  
  //next four lines are copied from MDN documentation, but adjusted too look like the pixel squares
  let gradient = ctx.createLinearGradient(0, 200, 200, 0);
  gradient.addColorStop(0, "green");
  gradient.addColorStop(0.7, "yellow");
  gradient.addColorStop(1, "red");
  
  ctx.fillStyle = gradient

  //cleans the square and instead fill it with gradient
  ctx.fillRect(squareToClean.x, squareToClean. y, squareToClean.w, squareToClean.h);

  if(j > 0){// this condition is to stop j from being less than 0
  j--;
  }
  //Bug fixed -> if (i != 0) was causing the squares to be deleted in a loop as i could get less than 0
  if(j == 0 && i > 0){//if the whole line is deleted, proceed to previous line. i > 0 is to stop deleting beyond canvas
    j = 9;
    i--;
  }
    lastSquare = null;// sets the last square to null as delete is completed.
  }


  }
  // clears the whole canvas if c pressed
  else if (event.key === "c"){
    ctx.clearRect(0,0,canvas.width, canvas. height);
    stack.length = 0; // if stack length wasn't set to 0, the delete would start in the middle of canvas
    //sets j and I to the beginning of the canvas
    j = 0;
    i = 0;
    
  }
}
)






