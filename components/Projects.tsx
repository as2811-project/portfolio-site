import React, { useState, useEffect, useRef } from "react";
import { FiGithub } from "react-icons/fi";

interface Project {
  title: string;
  description: string;
  githubLink: string;
  mediaUrl: string;
  mediaType: "image" | "video";
}

const projects: Project[] = [
  {
    title: "Project 1",
    description:
      "This is a description of project 1. It was built using React and Node.js.",
    githubLink: "https://github.com/yourusername/project1",
    mediaUrl: "/api/placeholder/400/300",
    mediaType: "image",
  },
  {
    title: "Project 2",
    description:
      "Project 2 is a full-stack application using MongoDB and Express.",
    githubLink: "https://github.com/yourusername/project2",
    mediaUrl: "/api/placeholder/400/300",
    mediaType: "image",
  },
];

const ProjectsList: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (projectsRef.current) {
        const scrollPosition = window.scrollY;
        const maxScroll = projectsRef.current.scrollHeight - window.innerHeight;
        const progress = (scrollPosition / maxScroll) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-100 p-8" ref={projectsRef}>
      <h1 className="text-4xl font-bold mb-8 text-center">
        My Web Development Projects
      </h1>

      <div className="fixed left-0 top-0 bottom-0 w-1 bg-gray-300">
        <div
          className="w-full bg-blue-500 transition-all duration-200 ease-out"
          style={{ height: `${scrollProgress}%` }}
        />
      </div>

      <div className="space-y-16 ml-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-start bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="md:w-2/3 p-6">
              <h2 className="text-2xl font-semibold mb-2">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 flex items-center"
                >
                  {project.title}
                  <FiGithub className="ml-2" />
                </a>
              </h2>
              <p className="text-gray-600">{project.description}</p>
            </div>
            <div className="md:w-1/3">
              {project.mediaType === "image" ? (
                <img
                  src={project.mediaUrl}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <video
                  src={project.mediaUrl}
                  className="w-full h-full object-cover"
                  controls
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsList;
