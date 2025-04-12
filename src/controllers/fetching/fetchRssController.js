import korbenRssFeed from "../../services/rss/korbenRssFeed.js";
import developpezRssFeed from "../../services/rss/developpezRssFeed.js";
import lesJoiesDuCodeRssFeed from "../../services/rss/joiesDuCodeRssFeed.js";
import frandroidRssFeed from "../../services/rss/frandroidRssFeed.js";
import zatazRssFeed from "../../services/rss/zatazRssFeed.js";
import nextInpactRssFeed from "../../services/rss/nextinpactRssFeed.js";

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

  frandroidRss: async (req, res) => {
    try {
      const posts = await frandroidRssFeed();
      res.status(200).json(posts);
    } catch (error) {
      console.error("Error fetching posts:", error);
      res.status(500).json({ message: "Error fetching posts" });
    }
  },

  zatazRss: async (req, res) => {
    try {
      const posts = await zatazRssFeed();
      res.status(200).json(posts);
    } catch (error) {
      console.error("Error fetching posts:", error);
      res.status(500).json({ message: "Error fetching posts" });
    }
  },

  nextinpactRss: async (req, res) => {
    try {
      const posts = await nextInpactRssFeed();
      res.status(200).json(posts);
    } catch (error) {
      console.error("Error fetching posts:", error);
      res.status(500).json({ message: "Error fetching posts" });
    }
  },
};

export default Rss;
