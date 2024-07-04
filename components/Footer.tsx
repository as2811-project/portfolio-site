import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-4 bg-neutral-900 text-center text-white">
      <p className="text-sm">
        Animations and design inspirations courtesy of{" "}
        <a
          href="https://aceternity.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-blue-300"
        >
          Aceternity
        </a>{" "}
        and{" "}
        <a
          href="https://nextui.org"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-blue-300"
        >
          NextUI
        </a>
        .
      </p>
    </footer>
  );
};

export default Footer;
