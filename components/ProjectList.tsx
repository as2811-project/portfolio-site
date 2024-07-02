"use client";

import { FaLink } from "react-icons/fa6";

interface Project {
  title: string;
  description: string;
  github: string;
  mediaUrl: string;
}

export default function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <div className="items-start px-4">
      {projects.map((project, index) => (
        <div
          key={index}
          className="md:flex-col items-start rounded-lg shadow-lg overflow-hidden mb-5"
        >
          <div className="p-6">
            <h2 className="text-2xl font-medium mb-2">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-violet-400 hover:text-violet-500 flex items-center"
              >
                {project.title} <FaLink className="ml-2 text-white" />
              </a>
            </h2>
            <p className="text-gray-300">{project.description}</p>
          </div>
          <div className="md:w-1/3">
            <img
              src={project.mediaUrl}
              alt={project.title}
              className="w-100 h-0 object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
