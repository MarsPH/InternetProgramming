// Select or get the canvas always canvass will come with the pen

//create constant var
const canvas = document.getElementById("mycanvas");
//make a decision is it 2d or 3d
const ctx = canvas.getContext("2d");

//draw a filled rectangle
ctx.fillStyle = "red";
//x, y, filled,
ctx.fillRect(20,20,100,50);

//Draw a line
ctx.beginPath(); // be ready
ctx.moveTo(20,100); // startingpoint
ctx.lineTo(200, 100); //ending point
ctx.stroke();

//Draw a circle
//x.y , radius, angles, (start and end)
ctx.beginPath();
//C=2Pr
ctx.arc(250,150,40,0, Math.PI * 2);
ctx.fillStyle = "blue";
ctx.fill();