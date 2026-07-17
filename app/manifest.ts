import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Carentix",
    short_name: "Carentix",
    description:
      "A managed, compliant healthcare operations partner — so your providers can focus entirely on patient care.",
    start_url: "/",
    display: "standalone",
    background_color: "#FAFAF7",
    theme_color: "#13294B",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
