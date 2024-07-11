"use client";
import { FaGithub } from "react-icons/fa";
import { Image } from "@nextui-org/react";
interface Project {
  title: string;
  description: string;
  github: string;
  media: string;
}

export default function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <div className="items-start px-2 grid grid-cols-2 gap-2">
      {projects.map((project, index) => (
        <div key={index} className="flex-col items-start rounded-lg mb-5">
          <div className="p-2">
            <div className="flex flex-row gap-2 items-center">
              <Image
                src={project.media}
                alt={project.title}
                className="rounded-lg"
              />
              <h2 className="text-2xl font-medium mb-2 text-white font-medium tracking-tight flex items-center">
                {project.title}
              </h2>
            </div>
            <p className="text-gray-300">{project.description}</p>
          </div>
          <div>
            <a href={project.github} target="_blank">
              <button className="flex flex-row rounded-full py-2 px-4 bg-neutral-950 hover:bg-neutral-800 items-center">
                <FaGithub className="mr-2" />
                GitHub
              </button>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
