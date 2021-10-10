import * as TR from 'three';
import grassPath from '../assets/images/grass.jpeg';

const texture = new TR.TextureLoader().load(grassPath);
const planeMaterial = new TR.MeshBasicMaterial({
  map: texture,
  side: TR.FrontSide,
});
const planeElement = new TR.PlaneGeometry(5, 5);
const plane = new TR.Mesh(planeElement, planeMaterial);

export default plane;
