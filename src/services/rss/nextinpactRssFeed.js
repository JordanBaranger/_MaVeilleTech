import Parser from "rss-parser";

const parser = new Parser();

const nextInpactRssFeed = async () => {
  try {
    const feed = await parser.parseURL(
      "https://nextinpact.com/rss/acces-libre.xml"
    );
    return feed.items.map((item) => ({
      title: item.title,
      link: item.link,
      pubDate: item.pubDate,
      description: item.contentSnippet,
      image: item.enclosure,
      source: "nextinpact.com",
    }));
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw new Error("Error fetching posts");
  }
};

export default nextInpactRssFeed;
