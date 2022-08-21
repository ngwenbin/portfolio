/* eslint-disable react/jsx-props-no-spreading */
import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import type { Euler, Vector3 } from "@react-three/fiber";
import { useCursor, Html, ArcballControls } from "@react-three/drei";

interface WallDisplay {
  position: Vector3;
  rotation: Euler;
}

interface FrameType {
  threeData: WallDisplay;
  data: ExperienceItem;
}

interface FramesType {
  frameData: Array<FrameType>;
}

interface ExperienceItem {
  company: string;
  position: string;
  present: boolean;
  location: string;
  description: Array<string>;
  startDate: string;
  endDate?: string;
}

const wallArray: Array<FrameType> = [
  {
    threeData: { position: [0, 1.5, 0], rotation: [0, 0, 0] },
    data: {
      company: "Trustana",
      position: "Front-end Software Engineer Intern",
      present: true,
      location: "Singapore",
      description: [
        "Developed features for a B2B e-commerce SaaS product and internal tools using Remix, Tailwind, Prisma, GraphQL and Typescript in an agile environment.",
      ],
      startDate: "May 2022",
    },
  },
  {
    threeData: { position: [0, 0, 0], rotation: [0, 0, 0] },
    data: {
      company: "Aerofoils GmbH",
      position: "Embedded Software Engineer Intern",
      present: false,
      location: "Munich, Germany",
      description: [
        "Led development efforts of a GUI for an e-hydrofoil surfboard remote controller based on ESP32 running FreeRTOS using C and the LVGL library in ESP-ID",
        "Built several interactive custom user interface widgets, screens, nested menus, and navigation logic",
      ],
      startDate: "Jan 2021",
      endDate: "Jul 2021",
    },
  },
  {
    threeData: { position: [0, -1.5, 0], rotation: [0, 0, 0] },
    data: {
      company: "B1G1 Pte.Ltd",
      position: "Software Engineer Intern",
      present: false,
      location: "Singapore",
      description: [
        "Integrated Mixpanel, Google Analytics, Segment and ActiveCampaign into company's website and generated custom user behavior reports for internal stakeholders",
        "Reduced sales team workload by automating marketing qualified leads (MQL) email verification processes by incorporating email verification API with ActiveCampaign.",
      ],
      startDate: "May 2020",
      endDate: "Jul 2020",
    },
  },
];

const Frame = ({ threeData, data }: FrameType) => {
  const [hovered, hover] = useState(false);
  const frame = useRef<THREE.Mesh>(null!);

  useCursor(hovered);
  return (
    <group {...threeData}>
      <mesh ref={frame} name={data.company} position={[0, 1, -20]}>
        <Html position={threeData.position} center distanceFactor={12}>
          <div className="grid grid-cols-1 sm:grid-cols-3 p-8 rounded-xl text-sm bg-gray-300 text-black gap-y-2 w-[484px]">
            <div className="block col-span-2">
              <p className="font-bold">{data.company}</p>
              <p className="font-medium">{data.position}</p>
            </div>
            <div className="block lg:text-right">
              <p>{data.location}</p>
              <p>
                {data.startDate} - {data.endDate ?? "Present"}
              </p>
            </div>
            <div className="col-span-2">
              <ul>
                {data.description.map((item, idx) => {
                  return (
                    <li key={idx} className="list-disc ml-8">
                      <p className="text-xs font-light">{item}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </Html>
      </mesh>
    </group>
  );
};

const Frames = ({ frameData }: FramesType) => {
  const q = new THREE.Quaternion();
  const p = new THREE.Vector3();
  const ref = useRef<THREE.Group>(null!);
  useEffect(() => {
    p.set(0, 0, 5.5);
    q.identity();
  }, []);

  useFrame((state, dt) => {
    state.camera.position.lerp(p, 0.025);
    state.camera.quaternion.slerp(q, 0.025);
  });

  return (
    <group ref={ref}>
      {frameData.map((item, id) => (
        <Frame key={id} {...item} />
      ))}
    </group>
  );
};

const ThreeDimensionWalls = () => {
  return (
    <Canvas
      style={{ overflow: "visible" }}
      // gl={{ alpha: false }}
      // dpr={[1, 1.5]}
      camera={{ position: [0, 0, 0], fov: 30 }}
    >
      <group>
        <Frames frameData={wallArray} />
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} />
      </group>
    </Canvas>
  );
};

export default ThreeDimensionWalls;
