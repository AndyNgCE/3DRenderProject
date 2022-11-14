import {FBXLoader} from 'https://cdn.jsdelivr.net/npm/three@0.118.1/examples/jsm/loaders/FBXLoader.js';
import {GLTFLoader} from 'https://cdn.jsdelivr.net/npm/three@0.118.1/examples/jsm/loaders/GLTFLoader.js';

// In thing.gib is the model we use, loads a static model
_LoadModel() {
    const loader = new GLTFLoader();
    loader.load('./resources/thing.glb', (gltf) => {
      gltf.scene.traverse(c => {
        c.castShadow = true;
      });
      this._scene.add(gltf.scene);
    });
  }

// FBX loads an animated model
_LoadAnimatedModel(){
    const loader = new FBXLoader();
    loader.setPath('./resources/folderNameWithModel/');
    loader.load('thing.fbx', (fbx) => {
        fbx.scale.setScalar(0.1);
        fbx.traverse(c => {
            c.castShadow = true;
        });
// Loads animation overlay for models .play() runs animation set
        const anim = new FBXLoader();
        anim.setPath('./resources/folderNameWithAnimation/');
        anim.load('dance.fbx', (anim) => {
            this._mixer = THREE.AnimationMixer(fbx);
            const idle = this._mixer.clipAction(anim.animations[0]);
            idle.play();
        })
        this._scene.add(fbx);
    });
}