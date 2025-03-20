let splineViewer1, splineViewer2;

function setup() {
    splineViewer1 = document.querySelector('spline-viewer:nth-of-type(1)');
    splineViewer2 = document.querySelector('spline-viewer:nth-of-type(2)');
    
    splineViewer1.addEventListener('load', () => onSplineLoad(1));
    splineViewer2.addEventListener('load', () => onSplineLoad(2));
}

function onSplineLoad(viewerNumber) {
    console.log(`Spline scene ${viewerNumber} loaded`);
    // You can add any additional functionality here
}

// Call setup when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', setup);
