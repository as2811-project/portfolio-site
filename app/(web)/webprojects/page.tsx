import NavBar from "@/components/Navbar";

const Web: React.FC = () => {
  return (
    <div>
      <NavBar />
      <section className="relative flex flex-col justify-center h-screen ml-8 mb-2 p-8 overflow-hidden">
        <h1 className="text-5xl font-medium mb-5 text-left ml-5 tracking-tight">
          My {"<WebDev/>"} Projects
        </h1>
      </section>
    </div>
  );
};

export default Web;
