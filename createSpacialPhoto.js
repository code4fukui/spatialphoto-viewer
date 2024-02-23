import * as THREE from "three";

export const createSpacialPhoto = (imgbase) => {
  const photo = new THREE.Group();
  for (let i = 1; i <= 2; i++) {
    const geometry = new THREE.PlaneGeometry(1, 1);
    const texture = new THREE.TextureLoader().load(imgbase + "-" + i + ".jpg");
    const material = new THREE.MeshBasicMaterial({ map: texture });
    //const material = new THREE.MeshToonMaterial({ color: 0x6699FF }) 
    const plane = new THREE.Mesh(geometry, material);
    // planeの配置
    plane.layers.set(i); // display in left/right eye only
    plane.position.x = 0;
    plane.position.y = 0;
    plane.position.z = -1;
    photo.add(plane);
  }
  return photo;
};
