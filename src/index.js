import * as THREE from 'three';
import './global.styles.css';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import spotLight from './elements/spotlight';
import planeTest from './elements/plane';

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
  // box geometry with a width, height and depth
  new THREE.BoxGeometry(1, 1, 1),

  // apply a mesh basic material to our mesh
  new THREE.MeshStandardMaterial({
    color: 0x00ffff,
  })
);
const plane = new THREE.Mesh(
  new THREE.PlaneGeometry(10, 10, 10),
  new THREE.MeshBasicMaterial({ color: 0x229922 })
);
plane.rotateX(-0.9);
scene.add(plane);
scene.add(cube);
cube.castShadow = true;

scene.add(spotLight);
scene.add(planeTest);

const cansvas = document.getElementsByTagName('canvas')[0];
const renderer = new THREE.WebGLRenderer({ cansvas });
renderer.setSize(innerWidth, innerHeight);
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
