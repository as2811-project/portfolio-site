/* eslint-disable react/no-unescaped-entities */
import { createClient } from "@supabase/supabase-js";
import ProjectList from "@/components/ProjectList";
import NavBar from "@/components/Navbar";

interface Project {
  title: string;
  description: string;
  github: string;
  media: string;
}

async function getProjects() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
  const supabase = createClient(supabaseUrl, supabaseKey);

  const { data, error } = await supabase
    .from("projects")
    .select("media, title, description, github")
    .eq("type", "Web");

  if (error) {
    console.error("Error fetching projects:", error.message);
    return [];
  }
  return data as Project[];
}

export default async function WebProjects() {
  const projects = await getProjects();

  return (
    <div>
      <NavBar />
      <section className="h-screen flex-col justify-center h-screen ml-6 mb-2 p-8">
        <h1 className="mt-16 text-5xl font-medium mb-5 text-left ml-5 tracking-tight">
          My Web Dev Projects
        </h1>
        <p className="font-normal text-neutral-300 mb-5 text-left ml-6 tracking-tight">
          These are some of the projects I worked on as I embarked on my
          'Project-Based Learning' journey.
        </p>
        <ProjectList projects={projects} />
      </section>
    </div>
  );
}
