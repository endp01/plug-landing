import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://onplug.io",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
  ];
}
