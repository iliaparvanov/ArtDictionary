var radius = 5;
function setup() {
    var html_can = document.getElementById('canvas');
    var canvas = createCanvas(innerWidth, innerHeight);
    canvas.parent(html_can);
    canvas.background(255,255,255)
    
   
}

function draw() 
{    
    

    if(mouseIsPressed) {
        strokeWeight(radius);
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
	
}