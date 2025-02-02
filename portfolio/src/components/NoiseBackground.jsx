/*import { useRef, useEffect } from 'react';

const NoiseBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const generateNoise = () => {
      const imageData = ctx.createImageData(canvas.width, canvas.height);
      const buffer32 = new Uint32Array(imageData.data.buffer);
      const len = buffer32.length;

      for (let i = 0; i < len; i++) {
        const v = Math.floor(Math.random() * 50);
        buffer32[i] = (255 << 24) | (v << 16) | (v << 8) | v;
      }
      ctx.putImageData(imageData, 0, 0);
    };

    let animationFrameId;
    const animate = () => {
      generateNoise();
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1,
        pointerEvents: 'none'
      }}
    />
  );
};

export default NoiseBackground;
*/
import "./NoiseBackground.css"; // Importa los estilos

const NoiseBackground = () => {
  return <div className="bg"></div>;
};

export default NoiseBackground;
