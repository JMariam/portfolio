"use client";

import React, { useEffect, useState } from "react";
import { throttle } from "lodash";

const MouseEffect = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = throttle((event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    }, 50);

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
    className="fixed top-0 left-0 w-full h-full pointer-events-none z-50 transition-all duration-75"
    style={{
      background: `radial-gradient(circle at ${position.x}px ${position.y}px, rgba(255, 255, 255, 0.25), transparent 30%)`,
      
    }}
  />
  );
};

export default MouseEffect;
