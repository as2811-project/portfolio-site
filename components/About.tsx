/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";

const AboutMe: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <div className="relative w-64 h-64 mx-auto">
              <Image
                src="/IMG_6806.jpg"
                alt="Anandh"
                width={500}
                height={500}
                className="rounded-full aspect-square object-cover"
              />
            </div>
          </div>
          <div className="md:w-2/3 md:pl-12">
            <h2 className="text-4xl font-medium mb-8 tracking-tight">
              About Me
            </h2>
            <p className="text-xl mb-6 text-neutral-400 tracking-tight">
              Hello! <span className="text-white">I'm Anandh</span>, an aspiring
              software and data engineer with a passion for backend development
              and data science. Complex software systems and engineering
              fascinate and inspire me. But sometimes I tend to overdo
              complexity. For example, there is no reason for this site to use
              Next.js or any JS for that matter. Yet here it is, with all sorts
              of animations and interactivities. <br></br>
              As for other miscellaneous information: I'm from Chennai, India.
              I'm in Australia at the moment, pursuing my Masters in Data
              Science at RMIT University, Melbourne. I have a couple of years of
              product{" "}
              <a
                className="text-sky-400 after:content-['_↗'] ..."
                href="/workexp"
                target="_blank"
              >
                experience
              </a>{" "}
              (albeit not exactly an engineering role) and I follow Manchester
              City FC or make digital art when I'm free.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-5">
              <SkillCard
                title="Software Engineering"
                description="Backend development with a focus on scalable and efficient solutions."
              />
              <SkillCard
                title="Data Engineering"
                description="Analytics, Pipelines, ETL, and more"
              />
              <SkillCard
                title="Photography"
                description="Pictures of people, just to see a smile on their faces :)"
              />
            </div>
            <a
              href="https://lavulopbfiogsnnczeae.supabase.co/storage/v1/object/public/photos/Resume_Anandh.pdf?t=2024-07-11T06%3A48%3A55.976Z"
              target="_blank"
            >
              <button className="rounded-full py-2 px-2 text-black bg-white hover:bg-neutral-700 hover:text-white">
                My Resume
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillCard: React.FC<{
  //color: string;
  title: string;
  description: string;
}> = ({ title, description }) => {
  return (
    <div
      className={`p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl`}
    >
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-neutral-300">{description}</p>
    </div>
  );
};

export default AboutMe;
//bg-gradient-to-b from-blue-700 via-neutral-900 to-black
