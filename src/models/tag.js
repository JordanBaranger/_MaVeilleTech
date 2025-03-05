import sequelize from "../database/connect/connect";
import { DataTypes, Model } from "sequelize";
import PostTag from "./postTag.js";
import Post from "./post.js";

export default class Tag extends Model {}

Tag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    tag_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Tag",
    tableName: "tag",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

Tag.belongsToMany(Post, {
  through: PostTag,
  foreignKey: "tag_id",
  onDelete: "CASCADE",
});
