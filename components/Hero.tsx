import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { BiLogoGmail } from "react-icons/bi";
import { FlipWords } from "./flip-words";

const Hero: React.FC = () => {
  const text = ["Software", "Data", "Photography"];
  return (
    <section className="flex flex-col justify-center h-screen ml-8 mb-2 p-8">
      <h1 className="text-7xl font-light mb-5 text-left ml-5">
        Hey, this is Anandh!
      </h1>
      <h2 className="text-3xl ml-3.5">
        <FlipWords words={text} />
      </h2>
      <p className="ml-6 mt-5">
        I'm an aspiring software (backend) and data engineer. <br></br> I
        sometimes dabble in Photography as well!
        <br></br>
      </p>
      <div className="ml-5 flex flex-grid mt-5">
        <FaLinkedinIn className="mr-5 text-sky-500 text-2xl" />
        <FiGithub className="mr-5 text-orange-500 text-2xl" />
        <BiLogoGmail className="text-red-500 text-2xl" />
      </div>
    </section>
  );
};

export default Hero;
