import * as TR from 'three';

const textureLoader = new TR.TextureLoader();

// const plane = new TR.Mesh(new TR.PlaneGeometry(200, 200), img);
textureLoader.load(['../../assets/grass.jpg'], (texture) => {
  const material = new TR.MeshBasicMaterial({
    color: 0xffffff,
    map: texture,
  });
});
const cube = new TR.Mesh(new TR.PlaneGeometry(1, 1), textureLoader);

// https://www.py4u.net/discuss/309998

export default cube;
