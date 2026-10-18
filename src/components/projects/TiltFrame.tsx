import { motion, useReducedMotion, useSpring } from "framer-motion";
import type { PointerEvent, ReactNode } from "react";

type TiltFrameProps = {
  children: ReactNode;
  className?: string;
};

/**
 * A very restrained 3D tilt. Only runs for mouse pointers and is disabled
 * entirely when the visitor prefers reduced motion.
 */
export function TiltFrame({ children, className }: TiltFrameProps) {
  const reduceMotion = useReducedMotion();
  const rotateX = useSpring(0, { stiffness: 120, damping: 18, mass: 0.35 });
  const rotateY = useSpring(0, { stiffness: 120, damping: 18, mass: 0.35 });

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (reduceMotion || event.pointerType !== "mouse") return;

    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    rotateY.set(x * 6);
    rotateX.set(y * -6);
  };

  const reset = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      className={className}
      style={{ rotateX, rotateY, transformPerspective: 1400 }}
      onPointerMove={handlePointerMove}
      onPointerLeave={reset}
      whileHover={reduceMotion ? undefined : { scale: 1.012 }}
      transition={{ scale: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } }}
    >
      {children}
    </motion.div>
  );
}
