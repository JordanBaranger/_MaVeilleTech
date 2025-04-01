import korbenRssFeed from "../../services/rss/korbenRssFeed.js";

const korbenRss = async (req, res) => {
  try {
    const posts = await korbenRssFeed();
    res.status(200).json(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).json({ message: "Error fetching posts" });
  }
};

export default korbenRss;
