import React from "react";

const languages = [
  { name: "Python", logo: "https://cdn.simpleicons.org/python" },
  {
    name: "JavaScript",
    logo: "https://cdn.simpleicons.org/javascript",
  },
  {
    name: "TypeScript",
    logo: "https://cdn.simpleicons.org/typeScript",
  },
  { name: "C#", logo: "https://cdn.simpleicons.org/csharp" },
];

const frameworks = [
  { name: "React", logo: "https://cdn.simpleicons.org/react" },
  { name: "Next.js", logo: "https://cdn.simpleicons.org/nextdotjs" },
  { name: "TailwindCSS", logo: "https://cdn.simpleicons.org/tailwindcss" },
  { name: ".NET", logo: "https://cdn.simpleicons.org/dotnet" },
  { name: "PySpark", logo: "https://cdn.simpleicons.org/apachespark" },
  { name: "Kafka", logo: "https://cdn.simpleicons.org/apachekafka" },
  { name: "AWS", logo: "https://cdn.simpleicons.org/amazonwebservices" },
  { name: "Supabase", logo: "https://cdn.simpleicons.org/supabase" },
];

const Skills: React.FC = () => {
  return (
    <section className="py-12">
      <section className="flex flex-col justify-center h-screen ml-5 mb-5 p-8">
        <h2 className="text-4xl font-light ml-5 px-5 mb-8">Languages I use</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {languages.map((language) => (
            <div
              key={language.name}
              className="rounded-lg p-6 flex flex-col items-center"
            >
              <img
                src={language.logo}
                alt={language.name}
                className="w-16 h-16 mb-4"
              />
              <h3 className="text-xl font-light">{language.name}</h3>
            </div>
          ))}
        </div>

        <h2 className="text-4xl font-light ml-5 px-5 mb-8">
          Tools and Frameworks I use
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {frameworks.map((framework) => (
            <div
              key={framework.name}
              className="rounded-lg p-6 flex flex-col items-center"
            >
              <img
                src={framework.logo}
                alt={framework.name}
                className="w-16 h-16 mb-4"
              />
              <h3 className="text-xl font-light">{framework.name}</h3>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Skills;
