let splineViewer;

function setup() {
    canvas.parent('p5-container');
    
    // Initialize Spline viewer
    splineViewer = document.createElement('spline-viewer');
    splineViewer.setAttribute('url', 'https://prod.spline.design/your-correct-scene-id/scene.splinecode');
    document.body.appendChild(splineViewer);
}


function draw() {
    background(200);
    orbitControl();
    sphere();
    
    // You can interact with the Spline viewer here if needed
    // For example, you could update its position based on p5.js mouse input
    // splineViewer.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
}
