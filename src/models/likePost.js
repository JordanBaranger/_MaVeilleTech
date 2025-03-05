import sequelize from "../database/connect/connect";
import { DataTypes, Model } from "sequelize";
import Post from "./post.js";
import User from "./user.js";

export default class LikePost extends Model {}

LikePost.init(
  {
    post_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: Post,
        key: "id",
      },
      onDelete: "CASCADE",
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: User,
        key: "id",
      },
      onDelete: "CASCADE",
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW, // Date du like
    },
  },
  {
    sequelize,
    modelName: "LikePost",
    tableName: "like_post",
    timestamps: false,
    indexes: [
      {
        unique: true,
        fields: ["post_id", "user_id"], // Empêche les doublons
      },
    ],
  }
);

// Associations
LikePost.belongsTo(Post, { foreignKey: "post_id", onDelete: "CASCADE" });
LikePost.belongsTo(User, { foreignKey: "user_id", onDelete: "CASCADE" });
