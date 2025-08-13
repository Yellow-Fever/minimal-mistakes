---
layout: blank
---

// select the canvas element created in the html.
var canvas = document.getElementById('bubble_map');

// Actual width and height. No idea if clienWidth would be a better option..?
var width = canvas.offsetWidth;
var height = canvas.offsetHeight;

// Set a projection for the map. Projection = transform a lat/long on a position on the 2d map.
var projection = d3.geoNaturalEarth1()
    .scale(width / 1.3 / Math.PI)
    .translate([width / 2, height / 2]);

// Get the 'context'
var ctx = canvas.getContext('2d');

// geographic path generator for given projection and canvas context
const pathGenerator = d3.geoPath(projection, ctx);

// Draw a background
ctx.fillStyle = '#ddd';
ctx.fillRect(0, 0, width, height);

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

// Load external data and boot
d3.json(dataset, function(data){

  // initialize the path
  ctx.beginPath();

  // Got the positions of the path
  pathGenerator(data);

  // Fill the paths
  ctx.fillStyle = "#999";
  ctx.fill();

  // Add stroke
  ctx.strokeStyle = "#69b3a2";
  ctx.stroke()

})