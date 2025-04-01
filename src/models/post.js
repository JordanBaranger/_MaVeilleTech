import sequelize from "../database/connect/connect.js";
import { DataTypes, Model } from "sequelize";
import PostTag from "./postTag.js";
import Tag from "./tag.js";

export default class Post extends Model {}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    published: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
    edited: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    category: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    source_url: {
      type: DataTypes.STRING(2048),
    },
    thumbnail: {
      type: DataTypes.STRING(2048),
    },
    status: {
      type: DataTypes.ENUM("draft", "published", "archived"),
      defaultValue: "draft",
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Post",
    tableName: "post",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);
