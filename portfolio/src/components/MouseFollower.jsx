import { useEffect, useRef } from "react";
import "./MouseFollower.css";

export function MouseFollower() {
  const ref = useRef(null);

  useEffect(() => {
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches)
      return;
    const el = ref.current;
    const CENTER_OFFSET = el.offsetWidth / 2;

    const handleMove = (e) => {
      el.style.transform = `translate(${e.clientX - CENTER_OFFSET}px, ${
        e.clientY - CENTER_OFFSET
      }px)`;
    };

    window.addEventListener("pointermove", handleMove, { passive: true });
    return () => window.removeEventListener("pointermove", handleMove);
  }, []);

  return (
    <div
      ref={ref}
      role="presentation"
      data-testid="mouse-follower"
      className="mouse-follower"
    />
  );
}
