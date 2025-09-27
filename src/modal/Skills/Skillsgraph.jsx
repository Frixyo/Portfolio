import React, { useRef, useEffect } from "react";
import "./skills.css";

export default function SnakeLoop() {
  const pathRef = useRef(null);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;

    const length = path.getTotalLength();

    // Le serpent = 25% du chemin
    const snakeLen = length * 0.25;

    path.style.strokeDasharray = `${snakeLen} ${length}`;

    const anim = path.animate(
      [
        { strokeDashoffset: "0" },
        { strokeDashoffset: `-${length}` },
      ],
      {
        duration: 8000, // temps d'un tour complet
        iterations: Infinity,
        easing: "linear",
      }
    );

    return () => anim.cancel();
  }, []);

  return (
    <div className="graph">
      <svg className="connections" viewBox="0 0 500 400">
        <rect
          ref={pathRef}
          x="50"
          y="50"
          width="400"
          height="300"
          rx="50"
          ry="50" // coins arrondis
          stroke="#0070f3"
          strokeWidth="6"
          fill="none"
        />
      </svg>
    </div>
  );
}
