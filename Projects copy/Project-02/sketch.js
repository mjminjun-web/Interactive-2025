let splineViewer1, splineViewer2;

function setup() {
    splineViewer1 = document.querySelector('spline-viewer:nth-of-type(1)');
    splineViewer2 = document.querySelector('spline-viewer:nth-of-type(2)');
    
    splineViewer1.addEventListener('load', () => onSplineLoad(1));
    splineViewer2.addEventListener('load', () => onSplineLoad(2));
    
    // Add hover effects for spline viewers
    addHoverEffects(splineViewer1);
    addHoverEffects(splineViewer2);
}

function onSplineLoad(viewerNumber) {
    console.log(`Spline scene ${viewerNumber} loaded`);
    // Add a subtle animation to indicate the scene is ready
    const viewer = viewerNumber === 1 ? splineViewer1 : splineViewer2;
    viewer.style.transition = 'transform 0.5s ease';
    viewer.style.transform = 'scale(1.05)';
    setTimeout(() => {
        viewer.style.transform = 'scale(1)';
    }, 500);
}

function addHoverEffects(viewer) {
    viewer.addEventListener('mouseenter', () => {
        viewer.style.transition = 'box-shadow 0.3s ease, transform 0.3s ease';
        viewer.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.3)';
        viewer.style.transform = 'scale(1.02)';
    });
    viewer.addEventListener('mouseleave', () => {
        viewer.style.boxShadow = 'none';
        viewer.style.transform = 'scale(1)';
    });
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
                    body { 
                        margin: 0; 
                        padding: 20px; 
                        font-family: Arial, sans-serif; 
                        background: linear-gradient(135deg, #f0f8ff, #add8e6); 
                        color: #333; 
                    }
                    .model_3d_container { 
                        width: 70%; 
                        height: 500px; 
                        border: 2px solid #ccc; 
                        border-radius: 10px; 
                        overflow: hidden; 
                        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2); 
                    }
                    .summary_container { 
                        width: 30%; 
                        padding: 10px; 
                        background: #f9f9f9; 
                        border-radius: 10px; 
                        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1); 
                    }
                    spline-viewer { 
                        width: 100%; 
                        height: 100%; 
                        border-radius: 10px; 
                    }
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