import {
  Component,
  Suspense,
  lazy,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { useReducedMotion } from "framer-motion";

const HeroCanvasInner = lazy(() => import("./HeroCanvasInner"));

function FallbackOrb() {
  return (
    <div className="orb-fallback" aria-hidden="true">
      <div className="orb-halo" />
      <div className="orb-ring" />
      <div className="orb-ring orb-ring--b" />
      <div className="orb-ring orb-ring--c" />

      <svg
        className="orb-svg"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="fallback-orb-fill" cx="38%" cy="32%" r="72%">
            <stop offset="0%" stopColor="#1e5f70" stopOpacity="0.55" />
            <stop offset="42%" stopColor="#101a1f" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#05070a" stopOpacity="0.98" />
          </radialGradient>
          <linearGradient
            id="fallback-orb-stroke"
            x1="0"
            y1="0"
            x2="1"
            y2="1"
          >
            <stop stopColor="#00ceff" stopOpacity="0.7" />
            <stop offset="1" stopColor="#8be9ff" stopOpacity="0.18" />
          </linearGradient>
          <radialGradient id="fallback-orb-core" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#d9fbff" stopOpacity="0.95" />
            <stop offset="30%" stopColor="#00ceff" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#00ceff" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle
          cx="200"
          cy="200"
          r="146"
          fill="url(#fallback-orb-fill)"
          stroke="url(#fallback-orb-stroke)"
          strokeWidth="1"
        />
        <circle
          cx="200"
          cy="200"
          r="146"
          stroke="rgba(255,255,255,0.10)"
          strokeWidth="0.7"
        />

        <g stroke="url(#fallback-orb-stroke)" strokeWidth="0.8">
          <ellipse cx="200" cy="200" rx="146" ry="42" opacity="0.7" />
          <ellipse cx="200" cy="200" rx="146" ry="88" opacity="0.55" />
          <ellipse cx="200" cy="200" rx="146" ry="120" opacity="0.4" />
          <ellipse cx="200" cy="200" rx="42" ry="146" opacity="0.7" />
          <ellipse cx="200" cy="200" rx="88" ry="146" opacity="0.55" />
          <ellipse cx="200" cy="200" rx="120" ry="146" opacity="0.4" />
        </g>

        <circle
          cx="200"
          cy="200"
          r="58"
          fill="url(#fallback-orb-core)"
          opacity="0.85"
        />
        <circle cx="200" cy="200" r="7" fill="#c7f7ff" />
        <circle cx="200" cy="200" r="3" fill="#ffffff" />

        <g fill="#00ceff">
          <circle cx="200" cy="54" r="2.5" opacity="0.8" />
          <circle cx="200" cy="346" r="2" opacity="0.5" />
          <circle cx="54" cy="200" r="2" opacity="0.45" />
          <circle cx="346" cy="200" r="2.5" opacity="0.7" />
        </g>
      </svg>

      <span className="orb-spark orb-spark--a" />
      <span className="orb-spark orb-spark--b" />
      <span className="orb-spark orb-spark--c" />
    </div>
  );
}

function supportsWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(
      window.WebGLRenderingContext &&
        (canvas.getContext("webgl2") || canvas.getContext("webgl")),
    );
  } catch {
    return false;
  }
}

class CanvasErrorBoundary extends Component<
  { children: ReactNode; fallback: ReactNode },
  { failed: boolean }
> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  render() {
    return this.state.failed ? this.props.fallback : this.props.children;
  }
}

/**
 * The 3D scene is intentionally isolated behind a lazy import:
 * Three.js only downloads when the hero is actually rendered, and the
 * site keeps a styled CSS fallback for reduced motion or missing WebGL.
 */
export function HeroCanvas() {
  const reduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const [webglFailed, setWebglFailed] = useState(false);

  useEffect(() => {
    if (!supportsWebGL()) {
      setWebglFailed(true);
      return;
    }

    const timer = window.setTimeout(() => setMounted(true), 120);
    return () => window.clearTimeout(timer);
  }, []);

  if (reduceMotion || webglFailed) {
    return <FallbackOrb />;
  }

  return (
    <CanvasErrorBoundary fallback={<FallbackOrb />}>
      {mounted ? (
        <Suspense fallback={<FallbackOrb />}>
          <HeroCanvasInner />
        </Suspense>
      ) : (
        <FallbackOrb />
      )}
    </CanvasErrorBoundary>
  );
}
