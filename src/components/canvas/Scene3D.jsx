import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Procedural Cosmic Starfield & Space Dust
function CosmicDust({ count = 800 }) {
  const pointsRef = useRef();

  // Generate random positions and colors for stars
  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const colorChoices = [
      new THREE.Color('#00f0ff'), // Neon Cyan
      new THREE.Color('#6366f1'), // Neon Indigo
      new THREE.Color('#a855f7'), // Neon Purple
      new THREE.Color('#ffffff')  // Pure White
    ];

    for (let i = 0; i < count; i++) {
      // Spread across deep space volume
      pos[i * 3] = (Math.random() - 0.5) * 50;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 50;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 40 - 10;

      const chosenColor = colorChoices[Math.floor(Math.random() * colorChoices.length)];
      col[i * 3] = chosenColor.r;
      col[i * 3 + 1] = chosenColor.g;
      col[i * 3 + 2] = chosenColor.b;
    }
    return [pos, col];
  }, [count]);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.02;
      pointsRef.current.rotation.x += delta * 0.008;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        vertexColors
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
        sizeAttenuation
      />
    </points>
  );
}

// Floating Cyber Polyhedra with subtle glow
function FloatingCrystals() {
  const mesh1 = useRef();
  const mesh2 = useRef();
  const mesh3 = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (mesh1.current) {
      mesh1.current.rotation.x = t * 0.3;
      mesh1.current.rotation.y = t * 0.2;
      mesh1.current.position.y = Math.sin(t * 0.8) * 0.4 + 2;
    }
    if (mesh2.current) {
      mesh2.current.rotation.x = -t * 0.25;
      mesh2.current.rotation.z = t * 0.15;
      mesh2.current.position.y = Math.cos(t * 0.7) * 0.5 - 2;
    }
    if (mesh3.current) {
      mesh3.current.rotation.y = t * 0.4;
      mesh3.current.position.y = Math.sin(t * 0.6 + 1) * 0.3;
    }
  });

  return (
    <group>
      {/* Top right floating icosahedron */}
      <mesh ref={mesh1} position={[6, 2, -6]}>
        <icosahedronGeometry args={[1.2, 0]} />
        <meshStandardMaterial
          color="#6366f1"
          roughness={0.2}
          metalness={0.9}
          wireframe
          emissive="#6366f1"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Bottom left floating octahedron */}
      <mesh ref={mesh2} position={[-6.5, -2, -5]}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color="#00f0ff"
          roughness={0.1}
          metalness={0.95}
          wireframe
          emissive="#00f0ff"
          emissiveIntensity={0.4}
        />
      </mesh>

      {/* Subtle floating torus ring */}
      <mesh ref={mesh3} position={[0, -4, -8]} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[3.2, 0.04, 16, 100]} />
        <meshStandardMaterial
          color="#a855f7"
          emissive="#a855f7"
          emissiveIntensity={0.6}
          roughness={0.1}
        />
      </mesh>
    </group>
  );
}

// Parallax Camera Controller responsive to cursor & scrolling
function CameraRig() {
  useFrame((state) => {
    const { pointer, camera } = state;
    // Smooth lerp towards mouse position
    const targetX = pointer.x * 1.5;
    const targetY = pointer.y * 1.0;
    camera.position.x += (targetX - camera.position.x) * 0.05;
    camera.position.y += (targetY - camera.position.y) * 0.05;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function Scene3D() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={[1, 1.8]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1.2} color="#00f0ff" />
        <pointLight position={[-10, -10, -5]} intensity={0.8} color="#a855f7" />
        <pointLight position={[0, 5, 2]} intensity={0.5} color="#6366f1" />

        <CosmicDust count={900} />
        <FloatingCrystals />
        <CameraRig />
      </Canvas>
    </div>
  );
}
