export default function robots() {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://www.wandalegalassociates.in";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
