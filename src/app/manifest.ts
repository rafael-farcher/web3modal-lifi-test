import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "MtopSwap | MetaDEX Aggregator for Best Prices in DeFi",
    short_name: "MtopSwap",
    description:
      "MtopSwap, a leading MetaDEX, offers the best prices in DeFi through meta-aggregation, cross-chain swaps, and a superior user experience.",
    icons: [
      {
        src: "/icons/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/android-chrome-384x384.png",
        sizes: "384x384",
        type: "image/png",
      },
      {
        src: "/icons/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    theme_color: "#0a181e",
    background_color: "#0a181e",
    start_url: "/",
    display: "standalone",
    orientation: "portrait",
  };
}
