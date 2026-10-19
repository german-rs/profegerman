import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const posts = (
    await getCollection("blog", ({ data }) => (import.meta.env.PROD ? !data.draft : true))
  ).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return rss({
    title: "Blog de Profe Germán",
    description:
      "Consejos claros y sin tecnicismos sobre computador, celular y seguridad digital, para adultos y personas mayores.",
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/blog/${post.id}/`,
    })),
    customData: "<language>es-cl</language>",
  });
}