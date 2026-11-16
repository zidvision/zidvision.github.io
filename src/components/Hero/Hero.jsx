
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";

function RobotModel() {
  const robot = useGLTF("/purple_blue_robot_deluxe.glb");
  const robotRef = useRef();

  useFrame((state, delta) => {
    if (robotRef.current) {
      robotRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <primitive
      ref={robotRef}
      object={robot.scene}
      position={[0, -1.6, 0]}
    />
  );
}

function Robot() {
  return (
    <div style={{ width: "100%", height: "450px" }}>
      <Canvas camera={{ position: [0, 1, 6], fov: 45 }}>
        <ambientLight intensity={2} />
        <directionalLight position={[3, 5, 5]} intensity={3} />

        <RobotModel />

        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}

export default Robot;
