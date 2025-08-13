


// select the canvas element created in the html
var canvas = document.getElementById('test_image');

// Get the 'context'
var ctx = canvas.getContext('2d');

// Set the color:
ctx.fillStyle = '#D8D8D8';

// Initialize path
ctx.beginPath();

// Go to the starting coordinate
ctx.moveTo(100, 50);

// Draw 2 segments
ctx.lineTo(300, 50);
ctx.lineTo(200, 370);

// Fill the shape
ctx.fill();
ctx.stroke();
