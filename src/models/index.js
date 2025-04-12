import Post from "./post.js";
import Tag from "./tag.js";
import PostTag from "./postTag.js";

Post.belongsToMany(Tag, {
  through: PostTag,
  foreignKey: "post_id",
  onDelete: "CASCADE",
});
Tag.belongsToMany(Post, {
  through: PostTag,
  foreignKey: "tag_id",
  onDelete: "CASCADE",
});

export { Post, Tag, PostTag };
