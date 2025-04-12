import Parser from "rss-parser";

const parser = new Parser();

const korbenRssFeed = async () => {
  try {
    const feed = await parser.parseURL("https://korben.info/feed.xml");
    return feed.items.map((item) => ({
      title: item.title,
      link: item.link,
      pubDate: item.pubDate,
      description: item.contentSnippet,
      source: "korben.info",
    }));
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw new Error("Error fetching posts");
  }
};

export default korbenRssFeed;
