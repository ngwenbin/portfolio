import * as THREE from "three";
import React, { useRef, useState, useEffect, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, TrackballControls } from "@react-three/drei";

const skills = [
  "React",
  "Typescript",
  "Javascript",
  "CSS",
  "HTML",
  "Python",
  "Flask",
  "Remix",
  "C",
  "Tailwind",
  "REST",
  "GraphQL",
  "Prisma",
  "Firebase",
  "Git",
  "ESP32",
  "ESP-IDF",
  "LVGL",
];

interface MapObject {
  skill: string;
  x: number;
  y: number;
  z: number;
}

const CircleRadius = 12;
const CommonAngle = 60; // Angle to explode nodes from 0,0,0

const TextBox = ({ text }: { text: string }) => {
  return (
    <div className="bg-gray-900 border border-gray-600 whitespace-nowrap rounded-md p-1 text-[10px] hover:bg-blue-800">
      {text}
    </div>
  );
};

const Scene = () => {
  const ref = useRef<THREE.Mesh>(null!);
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  const [maps, setMaps] = useState<MapObject[]>([]);
  useFrame((state, delta) => {
    ref.current.rotation.x += 0.003;
    ref.current.rotation.y += 0.003;
  });

  // useEffect(() => {
  //   const skillsMap = Array(3)
  //     .fill(0)
  //     .forEach((layer, layerId) => {
  //       const angleOffset = CommonAngle / 2;
  //       const mappings = skills.slice(6 * layerId, 6 * (layerId + 1));
  //       const newMapObjects = mappings.map((skill, secId): MapObject => {
  //         const x =
  //           Math.cos((Math.PI * CommonAngle * (layerId + 1)) / 180) *
  //           CircleRadius;
  //         const y =
  //           Math.cos((Math.PI * CommonAngle * (layerId + 1)) / 180) *
  //           CircleRadius;
  //         const z =
  //           Math.sin((Math.PI * CommonAngle * (layerId + 1)) / 180) *
  //           CircleRadius;
  //         return {
  //           skill,
  //           x,
  //           y,
  //           z,
  //         };
  //       });
  //       console.log(newMapObjects);
  //       setMaps([...maps, ...newMapObjects]);
  //     });
  //   // setMaps(skillsMap);
  // }, []);
  // Position x (left,right) y (top,down) z (in out)

  return (
    <>
      <mesh ref={ref} scale={0.15}>
        <sphereGeometry args={[CircleRadius, 10, 10]} />
        <meshBasicMaterial
          wireframe
          wireframeLinewidth={0.5}
          color="#06B6D4"
          transparent
          opacity={0.1}
        />
        <Html distanceFactor={10} sprite position={[0, 5, 8.66]} center>
          <TextBox text={skills[0]} />
        </Html>
        <Html distanceFactor={10} sprite position={[8.66, 5, 5]} center>
          <TextBox text={skills[1]} />
        </Html>
        <Html distanceFactor={10} sprite position={[8.66, 5, -5]} center>
          <TextBox text={skills[2]} />
        </Html>

        <Html distanceFactor={10} sprite position={[0, 5, -8.66]} center>
          <TextBox text={skills[3]} />
        </Html>
        <Html distanceFactor={10} sprite position={[-8.66, 5, -5]} center>
          <TextBox text={skills[4]} />
        </Html>
        <Html distanceFactor={10} sprite position={[-8.66, 5, 5]} center>
          <TextBox text={skills[5]} />
        </Html>
        <Html distanceFactor={10} sprite position={[0, 0, 8.66]} center>
          <TextBox text={skills[6]} />
        </Html>
        <Html distanceFactor={10} sprite position={[8.66, 0, 5]} center>
          <TextBox text={skills[7]} />
        </Html>
        <Html distanceFactor={10} sprite position={[8.66, 0, -5]} center>
          <TextBox text={skills[8]} />
        </Html>
        <Html distanceFactor={10} sprite position={[0, 0, -8.66]} center>
          <TextBox text={skills[9]} />
        </Html>
        <Html distanceFactor={10} sprite position={[-8.66, 0, -5]} center>
          <TextBox text={skills[10]} />
        </Html>
        <Html distanceFactor={10} sprite position={[-8.66, 0, 5]} center>
          <TextBox text={skills[11]} />
        </Html>
        <Html distanceFactor={10} sprite position={[0, -5, 8.66]} center>
          <TextBox text={skills[12]} />
        </Html>
        <Html distanceFactor={10} sprite position={[8.66, -5, 5]} center>
          <TextBox text={skills[13]} />
        </Html>
        <Html distanceFactor={10} sprite position={[8.66, -5, -5]} center>
          <TextBox text={skills[14]} />
        </Html>
        <Html distanceFactor={10} sprite position={[0, -5, -8.66]} center>
          <TextBox text={skills[15]} />
        </Html>
        <Html distanceFactor={10} sprite position={[-8.66, -5, -5]} center>
          <TextBox text={skills[16]} />
        </Html>
        <Html distanceFactor={10} sprite position={[-8.66, -5, 5]} center>
          <TextBox text={skills[17]} />
        </Html>
        {/* {maps.map((item, idx) => {
          return (
            <Html
              distanceFactor={10}
              sprite
              position={[item.x, item.y, item.z]}
              center
              key={idx}
            >
              <div>{item.skill}</div>
            </Html>
          );
        })} */}
      </mesh>
    </>
  );
};

const SphericalNode = () => (
  <Canvas>
    <fog attach="fog" args={["#202025", 0, 80]} />
    <Scene />
    <TrackballControls />
  </Canvas>
);

export default SphericalNode;
