import { useState, useEffect } from "react";
import "./MouseFollower.css";

export function MouseFollower() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (event) => {
      const { pageX, pageY } = event;
      setPosition({ x: pageX, y: pageY });
    };

    window.addEventListener("pointermove", handleMove);

    // Cleanup function
    return () => {
      window.removeEventListener("pointermove", handleMove);
    };
  }, []);

  return (
    <main>
      <div
        className="mouse-follower"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      />
    </main>
  );
}
