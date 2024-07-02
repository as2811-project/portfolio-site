"use client";
import NavBar from "@/components/Navbar";
import { ParallaxScroll } from "@/components/parallax-scroll";

export default function Photography() {
  return (
    <div>
      <NavBar />
      <section className="relative flex flex-col justify-center h-screen ml-8 mb-2 p-8 overflow-hidden">
        <h1 className="text-5xl font-medium mb-5 text-left ml-5 tracking-tight">
          Here's some of my photography
        </h1>
        <ParallaxScroll images={images} />
      </section>
    </div>
  );
}

const images = [
  "/photos/1.jpg",
  "/photos/2.jpg",
  "/photos/3.jpg",
  "/photos/4.jpg",
  "/photos/5.jpg",
  "/photos/6.jpg",
  "/photos/7.jpg",
  "/photos/8.jpg",
  "/photos/9.jpg",
  "/photos/10.jpg",
  "/photos/11.jpg",
  "/photos/12.jpg",
  "/photos/13.jpg",
  "/photos/14.jpg",
  "/photos/15.jpg",
  "/photos/16.jpg",
  "/photos/17.jpg",
  "/photos/18.jpg",
  "/photos/19.jpg",
];
