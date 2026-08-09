import { useEffect, useState } from "react";
import "./Project.css";
import "./ProjectSkeleton.css";

const WORDS = [
  "This",
  "XR29",
  "ALPHA",
  "ECHO",
  "DELTA",
  "ZK01",
  "CMD01",
  "PROTO",
  "COMMIT",
  "PUSH",
  "BUILD",
  "DEPLOY",
  "STREAM",
  "NODE",
  "HASH",
  "CIPHER",
  "NEURAL",
  "SYNAPSE",
  "CORE",
  "LOOP",
  "METRIC",
  "BETA",
];

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

export function ProjectSkeleton() {
  const targetTitle = "Coming Soon...";
  const [title, setTitle] = useState(targetTitle.split(""));
  const [desc, setDesc] = useState([]);

  useEffect(() => {
    let frame = 0;

    const interval = setInterval(() => {
      setTitle((prev) =>
        prev.map((c, i) =>
          i < frame
            ? targetTitle[i]
            : CHARS[Math.floor(Math.random() * CHARS.length)],
        ),
      );

      const randomWords = Array.from(
        { length: 10 },
        () => WORDS[Math.floor(Math.random() * WORDS.length)],
      ).join(" ");

      const sliced = randomWords.slice(0, 80);
      setDesc(sliced.split(""));

      frame = (frame + 1) % targetTitle.length;
    }, 140);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="project skeleton hacker">
      <h3>
        {title.map((c, i) => (
          <span key={i} className="fade-char">
            {c}
          </span>
        ))}
      </h3>

      <p className="scramble-desc">
        {desc.map((c, i) => (
          <span key={i} className="fade-char">
            {c}
          </span>
        ))}
      </p>

      <div className="project-photo skeleton-photo" />
    </div>
  );
}
