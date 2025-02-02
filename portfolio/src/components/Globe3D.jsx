import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

const Globe3D = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    const scene = new THREE.Scene();
    const width = currentMount.clientWidth;
    const height = currentMount.clientHeight;
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.set(0, 0, 5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setClearColor(0xf8cdc6, 0);
    currentMount.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xf8cdc6, 1);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xf8cdc6, 1);
    directionalLight.position.set(0, 1, 1);
    scene.add(directionalLight);

    const cubeTextureLoader = new THREE.CubeTextureLoader();
    const envMap = cubeTextureLoader.load([
      '/env/px.jpg',
      '/env/nx.jpg',
      '/env/py.jpg',
      '/env/ny.jpg',
      '/env/pz.jpg',
      '/env/nz.jpg'
    ]);
    scene.environment = envMap;

    let model = null;
    const mtlLoader = new MTLLoader();
    mtlLoader.load(
      '/3D/cube.mtl',
      (materials) => {
        materials.preload();
        const objLoader = new OBJLoader();
        objLoader.setMaterials(materials);
        objLoader.load(
          '/3D/cube.obj',
          (object) => {
            object.scale.set(0.008, 0.008, 0.008);

            // Calcular el centro del modelo
            const box = new THREE.Box3().setFromObject(object);
            const center = new THREE.Vector3();
            box.getCenter(center);

            // Ajustar la posición para centrarlo en el origen
            object.position.sub(center);

            object.traverse((child) => {
              if (child.isMesh) {
                child.material = new THREE.MeshStandardMaterial({
                  color: 0x9ec1cc,
                  metalness: 0.9,
                  roughness: 0.1,
                  envMap: envMap
                });
              }
            });

            model = object;
            scene.add(object);
          },
          undefined,
          (error) => {
            console.error('Error al cargar el OBJ:', error);
          }
        );
      },
      undefined,
      (error) => {
        console.error('Error al cargar el MTL:', error);
      }
    );

    const animate = () => {
      requestAnimationFrame(animate);
      if (model) {
        model.rotation.y += 0.01;
      }
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      currentMount.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} style={{ width: '100%', height: '600px' }} />;
};

export default Globe3D;
