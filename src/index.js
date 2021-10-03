import * as THREE from 'three';
import './global.styles.css';
import grass from './elements/grass';
import spotLight from './elements/spotlight';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  innerWidth / innerHeight,
  0.1,
  1000
);
camera.position.x = 1;
camera.position.y = 3;
camera.position.z = 15;

// create a cube
const cube = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshStandardMaterial({
    color: 0x00ffff,
  })
);
grass.rotateX(-0.9);
scene.add(grass);
scene.add(cube);
cube.castShadow = true;

scene.add(spotLight);

const cansvas = document.getElementsByTagName('canvas')[0];
const renderer = new THREE.WebGLRenderer({ cansvas });
renderer.setSize(innerWidth, innerHeight);
scene.background = new THREE.Color(0x331111);
renderer.render(scene, camera);
document.body.appendChild(renderer.domElement);
const controls = new OrbitControls(camera, renderer.domElement);
controls.update();

function animate() {
  requestAnimationFrame(animate);

  // required if controls.enableDamping or controls.autoRotate are set to true
  controls.update();

  renderer.render(scene, camera);
}

animate();
