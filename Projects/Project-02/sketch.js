let splineViewer;

function setup() {
    splineViewer = document.querySelector('spline-viewer');
    splineViewer.addEventListener('load', onSplineLoad);
}

function onSplineLoad() {
    console.log('Spline scene loaded');
    // You can add any additional functionality here
}

// No need for a draw function if you're not using p5.js for rendering

