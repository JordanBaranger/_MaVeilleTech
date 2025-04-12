import Parser from "rss-parser";

const parser = new Parser();

const zatazRssFeed = async () => {
  try {
    const feed = await parser.parseURL(
      "https://www.zataz.com/rss/zataz-news.rss"
    );
    return feed.items.map((item) => ({
      title: item.title,
      link: item.link,
      pubDate: item.pubDate,
      description: item.contentSnippet,
      image: item.enclosure,
      source: "zataz.com",
    }));
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw new Error("Error fetching posts");
  }
};

export default zatazRssFeed;
