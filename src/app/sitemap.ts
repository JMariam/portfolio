export const dynamic = "force-static";

export default function sitemap() {
  const baseUrl = "https://mariamjubril.vercel.app";
  const lastModified = new Date("2026-05-23").toISOString();

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/#about`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/#project`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#experience`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
  ];
}
