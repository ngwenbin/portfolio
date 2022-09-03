import React from "react";

interface ExperienceItem {
  company: string;
  position: string;
  present: boolean;
  location: string;
  description: Array<string>;
  startDate: string;
  endDate?: string;
}

const experienceItems: Array<ExperienceItem> = [
  {
    company: "Trustana",
    position: "Front-end Software Engineer Intern",
    present: true,
    location: "Singapore",
    description: [
      "Developed features for a B2B e-commerce SaaS product and internal tools using Remix, Tailwind, Prisma, GraphQL and Typescript in an agile environment.",
    ],
    startDate: "May 2022",
  },
  {
    company: "Aerofoils GmbH",
    position: "Embedded Software Engineer Intern",
    present: false,
    location: "Munich, Germany",
    description: [
      "Led development efforts of a GUI for an e-hydrofoil surfboard remote controller based on ESP32 running FreeRTOS using C and the LVGL library in ESP-ID",
      "Built several interactive custom user interface widgets, screens, nested menus, and navigation logic.",
    ],
    startDate: "Jan 2021",
    endDate: "Jul 2021",
  },
  {
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
];

const ExperienceRoute = () => (
  <div>
    <p className="text-xl font-bold py-2">Experience</p>
    <div className="flex flex-col gap-y-4 overflow-y-auto lg:max-h-96">
      {experienceItems.map((exp, id) => {
        return (
          <div
            key={id}
            className="grid grid-cols-1 sm:grid-cols-3 p-6 rounded-xl text-sm bg-gray-100/[.1] text-gray-200 gap-y-2 min-w-[272px] backdrop-blur-lg"
          >
            <div className="block col-span-2">
              <p className="font-bold">{exp.company}</p>
              <p className="font-medium">{exp.position}</p>
            </div>
            <div className="block lg:text-right">
              <p>{exp.location}</p>
              <p>
                {exp.startDate} - {exp.endDate ?? "Present"}
              </p>
            </div>
            <div className="col-span-2">
              <ul>
                {exp.description.map((item, idx) => {
                  return (
                    <li key={idx} className="list-disc ml-8 max-w-fit">
                      <p className="text-xs font-light break-words">{item}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

export default ExperienceRoute;
