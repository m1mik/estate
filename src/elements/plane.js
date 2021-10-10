import * as TR from 'three';
import grassPath from '../assets/images/grass.jpeg';

const texture = new TR.TextureLoader().load(grassPath);
texture.wrapS = TR.RepeatWrapping;
texture.wrapT = TR.RepeatWrapping;
// texture.repeat.set(4, 4);

const planeMaterial = new TR.MeshBasicMaterial({
  map: texture,
  side: TR.FrontSide,
});
const planeElement = new TR.PlaneGeometry(15, 15);
const plane = new TR.Mesh(planeElement, planeMaterial);
plane.material.side = TR.DoubleSide;
plane.rotation.z = Math.PI / 2;
plane.rotation.x = 1.55;

export default plane;
