import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Scene } from "./Scene";

type HeroCanvasInnerProps = {
  onReady?: () => void;
};

/**
 * Waits for the first couple of rendered frames before notifying the parent.
 * The first frame compiles the shaders, so by the time the canvas fades in
 * the scene is already fully drawn.
 */
function SceneReady({ onReady }: HeroCanvasInnerProps) {
  const frames = useRef(0);
  const notified = useRef(false);

  useFrame(() => {
    if (!onReady || notified.current) return;

    frames.current += 1;
    if (frames.current < 2) return;

    notified.current = true;
    onReady();
  });

  return null;
}

/**
 * Three.js lives in its own lazy chunk. The scene is small (one hero),
 * so it renders continuously while mounted; the canvas is display-only.
 */
export default function HeroCanvasInner({ onReady }: HeroCanvasInnerProps) {
  return (
    <div className="h-full w-full" aria-hidden="true">
      <Canvas
        frameloop="always"
        dpr={[1, 1.75]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        camera={{ position: [0, 0, 7], fov: 42 }}
        onCreated={({ gl }) => gl.setClearColor(0x000000, 0)}
        style={{ pointerEvents: "none" }}
      >
        <Scene />
        <SceneReady onReady={onReady} />
      </Canvas>
    </div>
  );
}
