import React from "react";
import Image from "next/image";
import { FaCode, FaDatabase, FaCamera } from "react-icons/fa";

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
                layout="fill"
                objectFit="cover"
                className="rounded-full shadow-lg"
              />
            </div>
          </div>
          <div className="md:w-2/3 md:pl-12">
            <h2 className="text-4xl font-medium mb-8 tracking-tight">
              About Me
            </h2>
            <p className="text-xl mb-6 text-neutral-400">
              Hello! <span className="text-white">I'm Anandh</span>, an aspiring
              software and data engineer with a passion for backend development
              and data science. Complex software systems and engineering
              fascinate and inspire me. But sometimes I tend to overdo it. For
              example, there is no reason for this site to use Next.js or any JS
              for that matter. Yet here it is, with all sorts of animations and
              interactivities. <br></br>
              As for other miscellaneous information: I'm from{" "}
              <span className="text-yellow-400">Chennai</span>, India. I'm in
              Australia at the moment, pursuing my Masters in Data Science at
              RMIT University,{" "}
              <span className="text-purple-400">Melbourne</span>. I follow
              European Football or make digital art when I'm free.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <SkillCard
                icon={<FaCode />}
                title="Software Engineering"
                description="Backend development with a focus on scalable and efficient solutions."
              />
              <SkillCard
                icon={<FaDatabase className="text-red-500" />}
                title="Data Engineering"
                description="Raw data to insights, embeddings for language models and recommender systems."
              />
              <SkillCard
                icon={<FaCamera className="text-lime-500" />}
                title="Photography"
                description="Pictures of people, just to see a smile on their faces :)"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => {
  return (
    <div className="p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
      <div className="text-3xl mb-4 text-blue-500">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default AboutMe;
