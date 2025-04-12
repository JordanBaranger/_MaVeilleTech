import Parser from "rss-parser";

const parser = new Parser();

const developpezRssFeed = async () => {
  try {
    const feed = await parser.parseURL("https://www.developpez.com/index/rss");
    return feed.items.map((item) => ({
      title: item.title,
      link: item.link,
      pubDate: item.pubDate,
      description: item.contentSnippet,
      source: "developpez.com",
    }));
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw new Error("Error fetching posts");
  }
};

export default developpezRssFeed;
