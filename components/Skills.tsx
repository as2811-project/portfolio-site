import React from "react";

const Skills: React.FC = () => {
  return (
    <section className="py-12">
      <h2 className="text-4xl font-bold text-center mb-8">Skills</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-semibold mb-4">Languages</h3>
          <ul className="list-disc list-inside">
            <li>Python</li>
            <li>JavaScript/TypeScript</li>
            <li>C#</li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-4">
            Tools, Frameworks and Miscellaneous
          </h3>
          <ul className="list-disc list-inside">
            <li>React/NextJS</li>
            <li>Python Flask</li>
            <li>TailwindCSS</li>
            <li>.NET</li>
            <li>PySpark</li>
            <li>Kafka</li>
            <li>AWS</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
