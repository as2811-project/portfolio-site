"use client";
import { FaGithub } from "react-icons/fa";
interface Project {
  title: string;
  description: string;
  github: string;
  mediaUrl: string;
}

export default function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <div className="items-start px-4 grid grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <div key={index} className="md:flex-col items-start rounded-lg mb-5">
          <div className="p-6">
            <h2 className="text-2xl font-medium mb-2 text-white font-medium tracking-tight flex items-center">
              {project.title}
            </h2>
            <p className="text-gray-300">{project.description}</p>
          </div>
          <div className="ml-5">
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
