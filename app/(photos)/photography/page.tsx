/* eslint-disable react/no-unescaped-entities */
import { createClient } from "@supabase/supabase-js";
import PhotographyClient from "@/components/PhotographyClient";
import NavBar from "@/components/Navbar";

async function getImageUrls() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
  const supabase = createClient(supabaseUrl, supabaseKey);

  const { data, error } = await supabase.storage
    .from("photos")
    .list("public", { limit: 25 });

  if (error) {
    console.error("Error fetching images:", error.message);
    return [];
  }

  const imageUrls = data.map((file) => {
    const {
      data: { publicUrl },
    } = supabase.storage.from("photos").getPublicUrl(`public/${file.name}`);
    return publicUrl;
  });
  console.log(imageUrls);
  return imageUrls;
}

export default async function Photography() {
  const imageUrls = await getImageUrls();

  return (
    <div>
      <NavBar />
      <section className="relative flex flex-col justify-center h-screen ml-6 mb-2 p-8">
        <h1 className="mt-16 text-5xl font-medium mb-5 text-left ml-4 tracking-tight">
          Here's some of my photography
        </h1>
        <PhotographyClient imageUrls={imageUrls} />
      </section>
    </div>
  );
}
