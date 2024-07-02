"use client";

import { ParallaxScroll } from "@/components/parallax-scroll";

export default function PhotographyClient({
  imageUrls,
}: {
  imageUrls: string[];
}) {
  return <ParallaxScroll images={imageUrls} />;
}
