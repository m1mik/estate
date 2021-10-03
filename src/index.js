import * as THREE from 'three';
import './global.styles.css';
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

const spotLight = new THREE.SpotLight(0xffffff);
spotLight.position.set(50, 70, 100);

spotLight.castShadow = true;

spotLight.shadow.mapSize.width = 1024;
spotLight.shadow.mapSize.height = 1024;

spotLight.shadow.camera.near = 500;
spotLight.shadow.camera.far = 4000;
spotLight.shadow.camera.fov = 30;

scene.add(spotLight);

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
