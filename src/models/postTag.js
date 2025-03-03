import sequelize from "../database/connect/connect";
import { DataTypes, Model } from "sequelize";

export default class PostTag extends Model {}

PostTag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    tag: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    post_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "posts",
        key: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
  },
  {
    sequelize,
    modelName: "PostTag",
    tableName: "post_tag",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);
