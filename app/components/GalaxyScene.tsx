"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function CameraMotion() {
  const group = useRef<THREE.Group>(null);

  useFrame(({ camera, clock }) => {
    const t = clock.getElapsedTime();

    camera.position.z = 8 - Math.sin(t * 0.15) * 0.5;
    camera.position.x = Math.sin(t * 0.08) * 0.4;
    camera.position.y = Math.cos(t * 0.1) * 0.2;

    camera.lookAt(0, 0, 0);

    if (group.current) {
      group.current.rotation.y += 0.0008;
      group.current.rotation.x += 0.0002;
    }
  });

  return (
    <group ref={group}>
      <Stars
        radius={180}
        depth={60}
        count={6000}
        factor={6}
        saturation={0}
        fade
        speed={0.3}
      />
    </group>
  );
}

export default function GalaxyScene() {
  return (
    <div className="absolute inset-0">
      <Canvas camera={{ position: [0, 0, 8], fov: 55 }}>
        <color attach="background" args={["#020202"]} />

        <ambientLight intensity={0.3} />

        <pointLight
          position={[0, 2, 5]}
          intensity={25}
          color="#88aaff"
        />

        <pointLight
          position={[-5, -2, 4]}
          intensity={12}
          color="#ffffff"
        />

        <CameraMotion />
      </Canvas>
    </div>
  );
}