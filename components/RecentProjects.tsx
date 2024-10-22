import React from "react";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  return (
    <div className="py-10 px-4">
      <h1 className="heading text-center mb-10">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((item) => (
          <div key={item.id} className="w-full h-[200px]">
            <PinContainer
              title={item.title}
              href={item.link}
              containerClassName="w-full h-full"
            >
              <div className="p-4 w-full h-full flex flex-col relative">
                <h2 className="font-bold text-lg mb-2 truncate">
                  {item.title}
                </h2>
                <p className="text-sm text-gray-300 flex-grow overflow-y-auto">
                  {item.des}
                </p>
                <div className="text-xs text-gray-400 italic">
                  {item.techStack.join(", ")}
                </div>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-2 right-2 text-sm text-blue-400 underline opacity-0 group-hover/pin:opacity-100 transition-opacity duration-300"
                  >
                    View Project
                  </a>
                )}
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
