import React from "react";
import FolderSvg from "~/images/FolderSvg.webp";

interface ProjectItem {
  name: string;
  details: ProjectDetails;
}

interface ProjectDetails {
  title: string;
  description: string;
  skills: Array<string>;
  link: string;
}

const projectItems: Array<ProjectItem> = [
  {
    name: "Recyclables",
    details: {
      title: "Rag and bone man hailing telegram bot",
      description:
        "Enables Singapore residents to hail for a rag and bone man via a telegram bot. Collected 4.2 tons of recyclables with over 780 users.",
      skills: ["Python", "Javascript", "NoSQL (Firestore)", "Cloud functions"],
      link: "https://recyclables.netlify.app/",
    },
  },
  {
    name: "Impact giving map",
    details: {
      title: "Impact giving map",
      description: "Built an interactive 3D map using deck.gl",
      skills: ["React", "Deck.gl", "REST API"],
      link: "https://b1g1impactmaptest.herokuapp.com/",
    },
  },
];

const ProjectsRoute = () => {
  return (
    <div>
      <div className="flex items-center gap-x-4">
        {projectItems.map((item, idx) => {
          return (
            <div
              key={idx}
              className="flex flex-col items-center max-w-[120px] group"
              // onClick={() => console.log("ok")}
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
