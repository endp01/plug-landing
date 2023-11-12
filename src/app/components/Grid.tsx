'use client'

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import useMouse from "../hooks/useMouse";

export default function Grid() { 
  const { mouse, isMoved } = useMouse()

  const [position, setPosition] = useState({ x: 0, y: 0 });

  const cells = 10;
  const cell = window.innerWidth / cells;
  const cols = Math.floor(window.innerWidth / cell);
  const ratio = window.innerWidth / window.innerHeight;
  const rows = Math.ceil(cols / ratio);
  const radius = Math.ceil(cell * 2 / 3);

  const power = Math.pow(mouse.x - position.x, 2) + Math.pow(mouse.y - position.y, 2);
  const base = 1.5;
  const opacity = base - Math.sqrt(power) / 1000;

  useEffect(() => {
    if (mouse.x === position.x && mouse.y === position.y) return;

    const speed = 0.05;

    requestAnimationFrame(() => { 
      setPosition(prevPos => ({ 
        x: prevPos.x + (mouse.x - prevPos.x) * speed,
        y: prevPos.y + (mouse.y - prevPos.y) * speed,
      }))
    })
  }, [mouse, position]);

  return (
    <motion.div 
      className={`fixed top-0 left-0 w-screen h-screen bg-black/5 dark:bg-white/5 grid gap-[1px] z-[-1]`}
      style={{
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.4, ease: "easeInOut" }}
    >
      {isMoved && <motion.div 
        className={`absolute rounded-full z-[-2] bg-gradient-radial from-black dark:from-white to-transparent`}
        style={{ 
          width: radius * 2,
          height: radius * 2,
          left: position.x,
          top: position.y,
          opacity,
          transform: `translate(-50%, -50%)`,
        }}
        animate={{ opacity }}
      />}

      <div className="absolute w-screen h-screen top-0 left-0 bg-gradient-to-tr from-white dark:from-black to-transparent z-[-1]" />

      {Array.from({ length: 1 + cols * rows }).map((_, i) => (
        <div
          key={i}
          className="bg-white dark:bg-black"
        />
      ))}
    </motion.div>
  );
}
