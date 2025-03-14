let splineViewer;

function setup() {
    let canvas = createCanvas(1000, 1000, WEBGL);
    canvas.parent('p5-container');
    
    splineViewer = document.querySelector('spline-viewer');
}

function draw() {
    background(200);
    orbitControl();
    sphere();
    
    // You can interact with the Spline viewer here if needed
    // For example, you could update its position based on p5.js mouse input
    // splineViewer.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
}
