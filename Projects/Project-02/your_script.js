const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const loader = new THREE.OBJLoader();
loader.load(
    '/Users/mj/Desktop/cca/web/Interactive-2025/Projects/Project-02',
    function (object) {
        scene.add(object);
        object.scale.set(1, 1, 1); // Adjust scale if needed
        camera.position.z = 5; // Adjust camera position
        animate();
    },
    function (xhr) {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    },
    function (error) {
        console.log('An error happened');
    }
);

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
