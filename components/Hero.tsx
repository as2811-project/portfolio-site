import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { BiLogoGmail } from "react-icons/bi";

const DottedLineBackground = () => (
  <svg
    className="absolute inset-0 w-full h-full"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <pattern
        id="dotted-pattern"
        width="20"
        height="20"
        patternUnits="userSpaceOnUse"
      >
        <circle cx="2" cy="2" r="1" fill="rgba(255,255,255,0.1)" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#dotted-pattern)" />
    <path
      d="M0,50 Q400,300 800,100 T1600,200"
      fill="none"
      strokeWidth="3"
      strokeDasharray="5,5"
    />
  </svg>
);

const Hero: React.FC = () => {
  return (
    <section className="relative flex flex-col justify-center h-screen ml-8 mb-2 p-8">
      <DottedLineBackground />
      <div className="lg:w-1/3 relative flex flex-row">
        <div className="flex flex-col md:flex-grow mt-10">
          <h1 className="text-neutral-400 text-9xl font-thin mb-2 text-left ml-5 tracking-tight">
            <span className="font-medium bg-gradient-to-b from-fuchsia-600 to-fuchsia-500 inline-block text-transparent bg-clip-text">
              Anandh{" "}
            </span>
            Sellamuthu
          </h1>
          <p className="ml-6 mt-2 text-neutral-400">
            An aspiring software and data engineer. A portrait photographer as
            well sometimes.
            <br />
          </p>
          <div className="ml-5 flex flex-grid mt-5">
            <a
              href="https://www.linkedin.com/in/anandh-sellamuthu-as"
              target="_blank"
            >
              <FaLinkedinIn className="mr-2 hover:text-sky-500 text-2xl" />
            </a>
            <a href="https://github.com/as2811-project" target="_blank">
              <FiGithub className="ml-2 mr-2 text-white hover:text-neutral-500 text-2xl" />
            </a>
            <a href="mailto:sanandh1234@gmail.com" target="_blank">
              <BiLogoGmail className="ml-2 hover:text-red-500 text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
