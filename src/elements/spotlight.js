import * as TR from 'three';

const spotLight = new TR.SpotLight(0xffffff);
spotLight.position.set(50, 70, 100);

spotLight.castShadow = true;

spotLight.shadow.mapSize.width = 1024;
spotLight.shadow.mapSize.height = 1024;

spotLight.shadow.camera.near = 500;
spotLight.shadow.camera.far = 4000;
spotLight.shadow.camera.fov = 30;

export default spotLight;
