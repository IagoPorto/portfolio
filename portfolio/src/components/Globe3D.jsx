import { useEffect, useRef } from "react";
import * as THREE from "three";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

const Globe3D = () => {
  const mountRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const modelRef = useRef(null); // Saved the 3D model
  const rotationSpeedRef = useRef(0.005);

  useEffect(() => {
    const currentMount = mountRef.current;
    const width = currentMount.clientWidth;
    const height = currentMount.clientHeight;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.set(0, 0, 5);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setClearColor(0xf8cdc6, 0);
    currentMount.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const ambientLight = new THREE.AmbientLight(0xf8cdc6, 1);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xf8cdc6, 1);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    const cubeTextureLoader = new THREE.CubeTextureLoader();
    const envMap = cubeTextureLoader.load([
      "/env/px.jpg",
      "/env/nx.jpg",
      "/env/py.jpg",
      "/env/ny.jpg",
      "/env/pz.jpg",
      "/env/nz.jpg",
    ]);
    scene.environment = envMap;

    const mtlLoader = new MTLLoader();
    mtlLoader.load("/3D/cube.mtl", (materials) => {
      materials.preload();
      const objLoader = new OBJLoader();
      objLoader.setMaterials(materials);
      objLoader.load("/3D/cube.obj", (object) => {
        object.scale.set(0.02, 0.02, 0.02);

        const box = new THREE.Box3().setFromObject(object);
        const center = new THREE.Vector3();
        box.getCenter(center);
        object.position.sub(center);

        object.traverse((child) => {
          if (child.isMesh) {
            child.material = new THREE.MeshStandardMaterial({
              color: 0x9ec1cc,
              metalness: 0.9,
              roughness: 0.1,
              envMap: envMap,
            });
          }
        });

        modelRef.current = object; // Guardar el modelo en useRef
        scene.add(object);
      });
    });

    const animate = () => {
      requestAnimationFrame(animate);
      if (modelRef.current) {
        modelRef.current.rotation.y += rotationSpeedRef.current;
      }
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!mountRef.current || !cameraRef.current || !rendererRef.current)
        return;

      const newWidth = mountRef.current.clientWidth;
      const newHeight = mountRef.current.clientHeight;
      const camera = cameraRef.current;
      const renderer = rendererRef.current;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);

      camera.position.z = Math.max(5, 7 * (1000 / newWidth));
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
      currentMount.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  const handleMouseEnter = () => {
    rotationSpeedRef.current = 0.04;
  };

  const handleMouseLeave = () => {
    rotationSpeedRef.current = 0.005;
  };

  return (
    <div
      ref={mountRef}
      style={{
        width: "100%",
        height: "50vh",
        maxHeight: "600px",
        minHeight: "300px",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );
};

export default Globe3D;
