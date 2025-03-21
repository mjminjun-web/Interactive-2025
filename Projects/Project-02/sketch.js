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

function getCurrentVisibleSection() {
    const sections = document.querySelectorAll('.section');
    for (let section of sections) {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            return section;
        }
    }
    return null;
}

function printVisibleSection() {
    const visibleSection = getCurrentVisibleSection();
    if (visibleSection) {
        const printContent = visibleSection.innerHTML;
        const originalContent = document.body.innerHTML;
        document.body.innerHTML = printContent;
        window.print();
        document.body.innerHTML = originalContent;
    }
}

// Call setup when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', setup);

// Add event listener for Ctrl+P
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.key === 'p') {
        e.preventDefault();
        printVisibleSection();
    }
});
