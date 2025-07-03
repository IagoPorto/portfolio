import { useState, useEffect } from "react";
import "./MouseFollower.css";

export function MouseFollower() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, []);

  return (
    <div
      role="presentation"
      data-testid="mouse-follower"
      className="mouse-follower"
      style={{
        top: `${pos.y}px`,
        left: `${pos.x}px`,
      }}
    />
  );
}
