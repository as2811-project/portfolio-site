"use client";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, Variants } from "framer-motion";

const languages = [
  { name: "Python", logo: "https://cdn.simpleicons.org/python" },
  { name: "TypeScript", logo: "https://cdn.simpleicons.org/typeScript" },
  { name: "C#", logo: "/Csharp.png" },
];

const frameworks = [
  { name: "React", logo: "https://cdn.simpleicons.org/react" },
  { name: "TailwindCSS", logo: "https://cdn.simpleicons.org/tailwindcss" },
  { name: ".NET", logo: "https://cdn.simpleicons.org/dotnet" },
  { name: "PySpark", logo: "https://cdn.simpleicons.org/apachespark" },
  { name: "Kafka", logo: "/kafka.png" },
  { name: "AWS", logo: "/aws.png" },
  { name: "Supabase", logo: "https://cdn.simpleicons.org/supabase" },
  { name: "Git", logo: "https://cdn.simpleicons.org/git" },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

const Skills: React.FC = () => {
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls]);

  return (
    <section ref={ref} className="py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h3 className="text-3xl font-medium mb-8">Languages</h3>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            {languages.map((lang) => (
              <SkillCard key={lang.name} skill={lang} />
            ))}
          </motion.div>
        </div>
        <div>
          <h3 className="text-3xl font-medium mb-8">Tools & Frameworks</h3>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-3"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            {frameworks.map((framework) => (
              <SkillCard key={framework.name} skill={framework} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

interface SkillCardProps {
  skill: { name: string; logo: string };
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  return (
    <motion.div
      variants={itemVariants}
      className="transition-all p-2 flex flex-col items-center justify-center transition-all duration-300 hover:filter-none"
    >
      <img
        src={skill.logo}
        alt={skill.name}
        className="w-16 h-16 mb-4 text-white"
      />
      <h3 className="text-xl font-semibold text-center">{skill.name}</h3>
    </motion.div>
  );
};

export default Skills;
