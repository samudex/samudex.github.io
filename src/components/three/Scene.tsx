import { useEffect, useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

type Pointer = { x: number; y: number };

function usePointer() {
  const pointer = useRef<Pointer>({ x: 0, y: 0 });

  useEffect(() => {
    const handlePointer = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      pointer.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = -((event.clientY / window.innerHeight) * 2 - 1);
    };

    window.addEventListener("pointermove", handlePointer, { passive: true });
    return () => window.removeEventListener("pointermove", handlePointer);
  }, []);

  return pointer;
}

function useGlowTexture() {
  const texture = useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 128;
    canvas.height = 128;

    const context = canvas.getContext("2d");
    if (!context) return null;

    const gradient = context.createRadialGradient(64, 64, 0, 64, 64, 64);
    gradient.addColorStop(0, "rgba(255,255,255,1)");
    gradient.addColorStop(0.2, "rgba(255,255,255,0.7)");
    gradient.addColorStop(0.55, "rgba(255,255,255,0.18)");
    gradient.addColorStop(1, "rgba(255,255,255,0)");

    context.fillStyle = gradient;
    context.fillRect(0, 0, 128, 128);

    const result = new THREE.CanvasTexture(canvas);
    result.colorSpace = THREE.SRGBColorSpace;
    result.needsUpdate = true;
    return result;
  }, []);

  useEffect(() => {
    return () => {
      texture?.dispose();
    };
  }, [texture]);

  return texture;
}

function ParticleField({
  count,
  texture,
}: {
  count: number;
  texture: THREE.Texture | null;
}) {
  const pointsRef = useRef<THREE.Points>(null);

  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    const acid = new THREE.Color("#c9f75e");
    const blue = new THREE.Color("#5b8cff");
    const white = new THREE.Color("#ffffff");

    for (let index = 0; index < count; index += 1) {
      const radius = 2.2 + Math.random() * 6.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const sinPhi = Math.sin(phi);

      positions[index * 3] = radius * sinPhi * Math.cos(theta);
      positions[index * 3 + 1] = radius * Math.cos(phi) * 0.85;
      positions[index * 3 + 2] = radius * sinPhi * Math.sin(theta) * 0.58;

      const source =
        Math.random() > 0.74 ? blue : Math.random() > 0.42 ? acid : white;
      const color = source.clone().multiplyScalar(0.55 + Math.random() * 0.55);

      colors[index * 3] = color.r;
      colors[index * 3 + 1] = color.g;
      colors[index * 3 + 2] = color.b;
    }

    return { positions, colors };
  }, [count]);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y += delta * 0.012;
    pointsRef.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.06) * 0.045;
  });

  return (
    <points ref={pointsRef} frustumCulled={false}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={count}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
          count={count}
        />
      </bufferGeometry>
      <pointsMaterial
        map={texture ?? undefined}
        size={0.042}
        sizeAttenuation
        vertexColors
        transparent
        opacity={0.72}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

const debris = [
  { position: [2.2, 1.5, -0.5], scale: 0.13, rotation: [0.3, 0.7, 0.2] },
  { position: [-1.9, -1.15, 0.7], scale: 0.09, rotation: [0.8, 0.2, 0.5] },
  { position: [1.65, -2.1, 0.25], scale: 0.075, rotation: [0.2, 0.5, 0.9] },
  { position: [-2.5, 1.7, -0.35], scale: 0.1, rotation: [0.6, 0.3, 0.1] },
  { position: [0.5, 2.4, 0.45], scale: 0.055, rotation: [0.1, 0.9, 0.4] },
] as const;

export function Scene() {
  const { viewport } = useThree();
  const isMobile = viewport.width < 6.5;
  const pointer = usePointer();
  const glow = useGlowTexture();

  const rigRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Group>(null);
  const shellRef = useRef<THREE.Mesh>(null);
  const ringsRef = useRef<THREE.Group>(null);
  const debrisRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    const elapsed = state.clock.elapsedTime;
    const dt = Math.min(delta, 0.05);

    if (rigRef.current) {
      rigRef.current.rotation.y = THREE.MathUtils.damp(
        rigRef.current.rotation.y,
        pointer.current.x * 0.16,
        3,
        dt,
      );
      rigRef.current.rotation.x = THREE.MathUtils.damp(
        rigRef.current.rotation.x,
        pointer.current.y * 0.1,
        3,
        dt,
      );
    }

    if (coreRef.current) {
      coreRef.current.rotation.y += dt * 0.11;
      coreRef.current.rotation.x = Math.sin(elapsed * 0.23) * 0.08;
      coreRef.current.position.y = Math.sin(elapsed * 0.55) * 0.08;
    }

    if (shellRef.current) {
      shellRef.current.rotation.y -= dt * 0.2;
      shellRef.current.rotation.z += dt * 0.035;
    }

    if (ringsRef.current) {
      ringsRef.current.rotation.z = elapsed * 0.035;
      ringsRef.current.rotation.x = 1.15 + Math.sin(elapsed * 0.25) * 0.06;
    }

    if (debrisRef.current) {
      debrisRef.current.rotation.y = -elapsed * 0.055;
    }
  });

  return (
    <>
      <ambientLight intensity={0.32} />
      <pointLight
        position={[4, 3, 4]}
        intensity={55}
        color="#d8ff77"
        distance={20}
        decay={2}
      />
      <pointLight
        position={[-5, -2, 3]}
        intensity={42}
        color="#5b8cff"
        distance={22}
        decay={2}
      />
      <pointLight
        position={[0, 5, -5]}
        intensity={24}
        color="#ffffff"
        distance={24}
        decay={2}
      />

      <group ref={rigRef}>
        <group position={isMobile ? [0, 0.7, -1] : [2.25, 0.05, 0]}>
          <group ref={coreRef}>
            <mesh>
              <icosahedronGeometry args={[1.55, 1]} />
              <meshStandardMaterial
                color="#121820"
                metalness={0.92}
                roughness={0.22}
                flatShading
                emissive="#1a240c"
                emissiveIntensity={0.55}
              />
            </mesh>

            <mesh ref={shellRef} scale={1.015}>
              <icosahedronGeometry args={[1.55, 1]} />
              <meshBasicMaterial
                color="#c9f75e"
                wireframe
                transparent
                opacity={0.12}
              />
            </mesh>

            <mesh scale={0.5}>
              <icosahedronGeometry args={[1, 1]} />
              <meshBasicMaterial
                color="#d9ff8a"
                transparent
                opacity={0.9}
              />
            </mesh>

            {glow && (
              <sprite scale={[5.6, 5.6, 1]}>
                <spriteMaterial
                  map={glow}
                  color="#c9f75e"
                  transparent
                  opacity={0.3}
                  blending={THREE.AdditiveBlending}
                  depthWrite={false}
                />
              </sprite>
            )}
          </group>

          <group ref={ringsRef} rotation={[1.15, 0.12, 0]}>
            <mesh>
              <torusGeometry args={[2.35, 0.006, 8, 200]} />
              <meshBasicMaterial
                color="#c9f75e"
                transparent
                opacity={0.32}
              />
            </mesh>
            <mesh rotation={[0.35, 0.2, 0]}>
              <torusGeometry args={[2.95, 0.004, 8, 200]} />
              <meshBasicMaterial
                color="#ffffff"
                transparent
                opacity={0.1}
              />
            </mesh>
            <mesh position={[2.35, 0, 0]}>
              <sphereGeometry args={[0.045, 16, 16]} />
              <meshBasicMaterial color="#c9f75e" />
            </mesh>
            <mesh position={[-2.35, 0, 0]}>
              <sphereGeometry args={[0.025, 16, 16]} />
              <meshBasicMaterial color="#8be9ff" transparent opacity={0.8} />
            </mesh>
          </group>

          <group ref={debrisRef}>
            {debris.map((item, index) => (
              <mesh
                key={index}
                position={item.position as unknown as [number, number, number]}
                rotation={
                  item.rotation as unknown as [number, number, number]
                }
                scale={item.scale}
              >
                <octahedronGeometry args={[1, 0]} />
                <meshStandardMaterial
                  color="#1b222b"
                  metalness={1}
                  roughness={0.18}
                  emissive="#2a3810"
                  emissiveIntensity={0.5}
                />
              </mesh>
            ))}
          </group>

          <ParticleField count={isMobile ? 420 : 950} texture={glow} />
        </group>
      </group>
    </>
  );
}
