import { FlipWords } from "./flip-words";

const Hero: React.FC = () => {
  const text = ["Software", "Data", "Photography"];
  return (
    <section className="flex flex-col justify-center h-screen ml-5 mb-5 p-8">
      <h1 className="text-7xl font-light mb-5 text-left ml-5">
        Hey, this is Anandh!
      </h1>
      <h2 className="text-3xl ml-3.5">
        <FlipWords words={text} />
      </h2>
    </section>
  );
};

export default Hero;
