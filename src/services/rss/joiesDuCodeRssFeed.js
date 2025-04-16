import Parser from "rss-parser";

const parser = new Parser();

const lesJoiesDuCodeRssFeed = async () => {
  try {
    const feed = await parser.parseURL("https://lesjoiesducode.fr/feed");
    return feed.items.map((item) => {
      return {
        title: item.title,
        link: item.link,
        pubDate: item.pubDate,
        imageUrl: item.enclosure?.type.startsWith("image")
          ? item.enclosure?.url
          : null, // URL de l'image si c'est une image
        videoUrl: item.enclosure?.type.startsWith("video")
          ? item.enclosure?.url
          : null, // URL de la vidéo si c'est une vidéo
        source: "lesjoiesducode.fr",
      };
    });
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw new Error("Error fetching posts");
  }
};

export default lesJoiesDuCodeRssFeed;
