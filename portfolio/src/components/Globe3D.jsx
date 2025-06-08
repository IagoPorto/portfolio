import { useEffect, useRef } from "react";
import * as THREE from "three";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

const DEFAULT_ROTATION_SPEED = 0.005;
const HOVER_ROTATION_SPEED = 0.04;

const CAMERA_FOV = 75;
const CAMERA_NEAR = 0.1;
const CAMERA_FAR = 1000;
const CAMERA_INITIAL_Z = 5;

const LIGHT_COLOR = 0xf8cdc6;
const LIGHT_INTENSITY = 1;

const MODEL_SCALE = 0.02;

const SEVEN = 7;

const ENV_PATHS = [
  "/env/px.jpg",
  "/env/nx.jpg",
  "/env/py.jpg",
  "/env/ny.jpg",
  "/env/pz.jpg",
  "/env/nz.jpg",
];

const Globe3D = () => {
  const mountRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const modelRef = useRef(null);
  const rotationSpeedRef = useRef(DEFAULT_ROTATION_SPEED);

  useEffect(() => {
    const currentMount = mountRef.current;
    const width = currentMount.clientWidth;
    const height = currentMount.clientHeight;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      CAMERA_FOV,
      width / height,
      CAMERA_NEAR,
      CAMERA_FAR
    );
    camera.position.set(0, 0, CAMERA_INITIAL_Z);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setClearColor(LIGHT_COLOR, 0);
    currentMount.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const ambientLight = new THREE.AmbientLight(LIGHT_COLOR, LIGHT_INTENSITY);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(
      LIGHT_COLOR,
      LIGHT_INTENSITY
    );
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    const cubeTextureLoader = new THREE.CubeTextureLoader();
    const envMap = cubeTextureLoader.load(ENV_PATHS);
    scene.environment = envMap;

    const mtlLoader = new MTLLoader();
    mtlLoader.load("/3D/cube.mtl", (materials) => {
      materials.preload();
      const objLoader = new OBJLoader();
      objLoader.setMaterials(materials);
      objLoader.load("/3D/cube.obj", (object) => {
        object.scale.set(MODEL_SCALE, MODEL_SCALE, MODEL_SCALE);

        const box = new THREE.Box3().setFromObject(object);
        const center = new THREE.Vector3();
        box.getCenter(center);
        object.position.sub(center);

        object.traverse((child) => {
          if (child.isMesh) {
            const newMaterial = new THREE.MeshStandardMaterial({
              color: 0x9ec1cc,
              metalness: 0.9,
              roughness: 0.1,
              envMap,
            });
            // eslint-disable-next-line no-param-reassign
            child.material = newMaterial;
          }
        });

        modelRef.current = object;
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

      const sevenFactor = SEVEN * (CAMERA_FAR / newWidth);
      camera.position.z = Math.max(CAMERA_INITIAL_Z, sevenFactor);
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
    rotationSpeedRef.current = HOVER_ROTATION_SPEED;
  };

  const handleMouseLeave = () => {
    rotationSpeedRef.current = DEFAULT_ROTATION_SPEED;
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
