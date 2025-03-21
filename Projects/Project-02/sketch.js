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
        // Create a new window for printing
        const printWindow = window.open('', '_blank');
        
        // Write the content to the new window
        printWindow.document.write(`
            <html>
            <head>
                <title>Print Section</title>
                <style>
                    body { margin: 0; padding: 20px; }
                    .model_3d_container { width: 70%; height: 500px; } /* Adjust height as needed */
                    .summary_container { width: 30%; }
                    spline-viewer { width: 100%; height: 100%; }
                </style>
            </head>
            <body>
                ${visibleSection.outerHTML}
                <script type="module" src="https://unpkg.com/@splinetool/viewer@1.9.78/build/spline-viewer.js"></script>
            </body>
            </html>
        `);
        
        // Wait for content to load, then print
        printWindow.document.close();
        printWindow.addEventListener('load', function() {
            printWindow.print();
            printWindow.close();
        });
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
