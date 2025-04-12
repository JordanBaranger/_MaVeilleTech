import Parser from "rss-parser";

const parser = new Parser();

const frandroidRssFeed = async () => {
  try {
    const feed = await parser.parseURL("https://www.frandroid.com/feed");
    return feed.items.map((item) => ({
      title: item.title,
      link: item.link,
      pubDate: item.pubDate,
      description: item.contentSnippet,
      image: item.enclosure,
      source: "frandroid.com",
    }));
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw new Error("Error fetching posts");
  }
};

export default frandroidRssFeed;
