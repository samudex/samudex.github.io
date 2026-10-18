import { Canvas } from "@react-three/fiber";
import { Scene } from "./Scene";

/**
 * Three.js lives in its own lazy chunk. The scene is small (one hero),
 * so it renders continuously while mounted; the canvas is display-only.
 */
export default function HeroCanvasInner() {
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
      </Canvas>
    </div>
  );
}
