let splineViewer;

function setup() {
    let canvas = createCanvas(400, 400, WEBGL);
    canvas.parent('p5-container');
    
    // Initialize Spline viewer
    splineViewer = document.createElement('spline-viewer');
    splineViewer.setAttribute('url', 'https://prod.spline.design/untitled-8d5088ce0274cdfc2725af9c35331707/scene.splinecode');
    document.getElementById('spline-container').appendChild(splineViewer);
}

function draw() {
    background(200);
 
