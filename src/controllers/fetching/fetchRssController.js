import korbenRssFeed from "../../services/rss/korbenRssFeed.js";
import developpezRssFeed from "../../services/rss/developpezRssFeed.js";
import lesJoiesDuCodeRssFeed from "../../services/rss/joiesDuCodeRssFeed.js";

const Rss = {
  korbenRss: async (req, res) => {
    try {
      const posts = await korbenRssFeed();
      res.status(200).json(posts);
    } catch (error) {
      console.error("Error fetching posts:", error);
      res.status(500).json({ message: "Error fetching posts" });
    }
  },

  developpezRss: async (req, res) => {
    try {
      const posts = await developpezRssFeed();
      res.status(200).json(posts);
    } catch (error) {
      console.error("Error fetching posts:", error);
      res.status(500).json({ message: "Error fetching posts" });
    }
  },

  lesJoiesDuCodeRss: async (req, res) => {
    try {
      const posts = await lesJoiesDuCodeRssFeed();
      res.status(200).json(posts);
    } catch (error) {
      console.error("Error fetching posts:", error);
      res.status(500).json({ message: "Error fetching posts" });
    }
  },
};

export default Rss;
