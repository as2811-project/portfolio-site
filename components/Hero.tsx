import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { BiLogoGmail } from "react-icons/bi";
import { FlipWords } from "./flip-words";

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
      stroke="url(#line-gradient)"
      strokeWidth="3"
      strokeDasharray="5,5"
    />
  </svg>
);

const Hero: React.FC = () => {
  const text = ["Software", "Data", "Photography"];

  return (
    <section className="relative flex flex-col justify-center h-screen ml-8 mb-2 p-8 overflow-hidden">
      <DottedLineBackground />
      <div className="flex flex-col lg:w-1/3 relative z-10 flex flex-row">
        <div className="flex flex-col md:flex-grow">
          <h1 className="text-neutral-400 text-8xl font-thin mb-5 text-left ml-5 tracking-tight">
            <span className="font-medium bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
              Anandh{" "}
            </span>
            Sellamuthu
          </h1>
          <h2 className="text-4xl ml-3.5">
            <FlipWords words={text} />
          </h2>
          <p className="ml-6 mt-5 text-neutral-400">
            An aspiring software (backend) and data engineer. <br />
            A portrait photographer as well sometimes.
            <br />
          </p>
          <div className="ml-5 flex flex-grid mt-5">
            <a
              href="https://www.linkedin.com/in/anandh-sellamuthu-as"
              target="_blank"
            >
              <button className="hover:bg-sky-200 rounded-full p-2">
                <FaLinkedinIn className="text-sky-500 text-2xl" />
              </button>
            </a>
            <a href="https://github.com/as2811-project" target="_blank">
              <button className="hover:bg-orange-200 rounded-full p-2 ml-2">
                <FiGithub className="text-orange-500 text-2xl" />
              </button>
            </a>
            <a href="mailto:sanandh1234@gmail.com" target="_blank">
              <button className="hover:bg-red-200 rounded-full p-2 ml-2">
                <BiLogoGmail className="text-red-500 text-2xl" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
