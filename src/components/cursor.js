"use client";
import React, { useState, useEffect, useRef } from "react";

export default function FlareCursor() {
  const [isPointer, setIsPointer] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // posição alvo e posição atual (suave)
  const target = useRef({ x: 0, y: 0 });
  const smoothPos = useRef({ x: 0, y: 0 });

  // controle do loop de animação
  const raf = useRef(null);

  const handleMouseMove = (e) => {
    target.current = { x: e.clientX, y: e.clientY };
    const targetEl = e.target;
    setIsPointer(
      window.getComputedStyle(targetEl).getPropertyValue("cursor") === "pointer"
    );
  };

  useEffect(() => {
    const smoothFactor = 0.15;

    const animate = () => {
      smoothPos.current.x +=
        (target.current.x - smoothPos.current.x) * smoothFactor;
      smoothPos.current.y +=
        (target.current.y - smoothPos.current.y) * smoothFactor;

      setPosition({
        x: smoothPos.current.x,
        y: smoothPos.current.y,
      });

      raf.current = requestAnimationFrame(animate);
    };

    raf.current = requestAnimationFrame(animate);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      cancelAnimationFrame(raf.current);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const flareSize = isPointer ? 0 : 30;
  const cursorStyle = isPointer ? { left: "-100px", top: "-100px" } : {};
  return (
    <div
      className={`pointer-events-none hidden lg:block fixed z-50 ${isPointer ? "pointer" : ""}`}
      style={{
        ...cursorStyle,
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${flareSize}px`,
        height: `${flareSize}px`,
        mixBlendMode: "difference",
      }}
    >
      <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="19 19 38 38"
  width="12"
  height="12"
  className="fill-neutral-100 transform -translate-1 scale-150"
>
  <path d="M22.2448 39.5833H19v-3.1666h3.2448C22.9875 28.9363 28.9363 22.9875 36.4167 22.2448V19h3.1666v3.2448c7.4804.7427 13.4292 6.6915 14.1719 14.1719H57v3.1666h-3.2448c-.7427 7.4804-6.6915 13.4292-14.1719 14.1719V57h-3.1666v-3.2448c-7.4804-.7427-13.4292-6.6915-14.1719-14.1719Zm3.1865-3.1666H28.5v3.1666h-3.0687c.7145 5.7297 5.2557 10.2709 10.9854 10.9854V47.5h3.1666v3.0687c5.7297-.7145 10.2709-5.2557 10.9853-10.9854H47.5v-3.1666h3.0686c-.7144-5.7297-5.2556-10.2709-10.9853-10.9853V28.5h-3.1666v-3.0686c-5.7297.7144-10.2709 5.2556-10.9854 10.9853Z" />
</svg>

    </div>
  );
};