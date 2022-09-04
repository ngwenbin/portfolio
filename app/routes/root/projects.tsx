/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from "react";
import useGlobalContext from "~/context/GlobalContext";
import clsx from "clsx";
import { LinkIcon } from "@heroicons/react/outline";
import FolderSvg from "~/images/folderIcon.webp";
import ImpactProject from "~/images/impactProject.webp";
import RecyclablesProject from "~/images/recyclablesProject.webp";

interface ProjectItem {
  name: string;
  details: ProjectDetails;
}

interface ProjectDetails {
  title: string;
  banner: string;
  description: string;
  skills: Array<string>;
  link: string;
  github: string;
}

const projectItems: Array<ProjectItem> = [
  {
    name: "Recyclables",
    details: {
      title: "Rag and bone man hailing telegram bot",
      banner: RecyclablesProject,
      description:
        "Spearheaded a social initiative and led a team of students to build a Telegram bot that enables Singapore residents to hail for a rag and bone man. Collected 4.2 tons of recyclables with over 780 users. Responsible for developing the Telegram bot using python and Firebase, and implemented a geofence-based user registration system to enable ease of region expansion",
      skills: [
        "Python",
        "Javascript",
        "React",
        "NoSQL (Google Firestore)",
        "Firebase",
      ],
      link: "https://recyclables.netlify.app/",
      github: "https://github.com/ngwenbin/RecyclablesBot",
    },
  },
  {
    name: "Impact giving map",
    details: {
      title: "Impact giving map",
      banner: ImpactProject,
      description:
        "Designed and developed an interactive map with React.js, deck.gl, Aloglia search and internal APIs to provide giving impact data visualization for stakeholders. *Independent project initiated while interning at B1G1. ",
      skills: ["React", "Deck.gl", "REST API", "Aloglia Search"],
      link: "https://b1g1-impact-map.netlify.app/",
      github: "https://github.com/ngwenbin/B1G1-impact-giving-map",
    },
  },
];

const ProjectDetailCard = ({
  title,
  banner,
  description,
  skills,
  link,
  github,
}: ProjectDetails) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  return (
    <>
      {isLoading && (
        <div className="animate-pulse">
          <div className="flex justify-center items-center mb-8 bg-gray-300 rounded-lg dark:bg-gray-600 aspect-[2]">
            <svg
              className="w-12 h-12 text-gray-200 dark:text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 640 512"
            >
              <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
            </svg>
          </div>
          <div className="h-8 bg-gray-200 rounded-full dark:bg-gray-600 mb-8 max-w-xs" />
          {[...new Array(4)].map((item, idx) => {
            return (
              <div
                className="h-5 bg-gray-200 rounded-full dark:bg-gray-600 mb-4 max-w-xl"
                key={idx}
              />
            );
          })}
          <div className="mt-8">
            <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-600 mb-4 w-32" />
            <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-600 mb-4 max-w-xs" />
            <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-600 w-32" />
          </div>
        </div>
      )}
      <div className={clsx("space-y-4", isLoading && "hidden")}>
        <div className="aspect-w-3 aspect-h-2">
          <img
            className={clsx("rounded-lg object-cover", isLoading && "hidden")}
            src={banner}
            alt=""
            onLoad={() => setIsLoading(false)}
          />
        </div>
        <div className="space-y-1">
          <p className="text-2xl font-bold">{title}</p>
        </div>
        <div className="text-lg font-normal">
          <p className="text-gray-200">{description}</p>
        </div>
        <div>
          <p className="font-bold text-cyan-500">Technologies:</p>
          {skills.map((skill, idx) => {
            return (
              <p key={idx} className="inline">{`${
                idx !== 0 ? `, ${skill}` : skill
              }`}</p>
            );
          })}
        </div>
        <div className="flex space-x-5">
          <a
            href={github}
            className="text-gray-400 hover:text-gray-500 border-none outline-none"
            target="_blank"
            rel="noreferrer"
          >
            <span className="sr-only">Github</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="white"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            href={link}
            className="text-gray-400 hover:text-gray-500 border-none outline-none"
            target="_blank"
            rel="noreferrer"
          >
            <span className="sr-only">link</span>
            <LinkIcon width={24} height={24} />
          </a>
        </div>
      </div>
    </>
  );
};

const ProjectsRoute = () => {
  const { showModal } = useGlobalContext();

  const onClickHandler = (details: ProjectDetails) => {
    showModal({
      show: true,
      children: <ProjectDetailCard {...details} />,
    });
  };

  return (
    <div>
      <div className="flex items-center gap-x-4">
        {projectItems.map((item, idx) => {
          return (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
            <div
              key={idx}
              className="flex flex-col items-center max-w-[120px] group"
              onClick={() => onClickHandler(item.details)}
            >
              <img
                src={FolderSvg}
                className="group-hover:scale-90 cursor-pointer active:opacity-50"
                alt="folder"
              />
              <p className="text-xs font-base text-center">{item.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsRoute;
