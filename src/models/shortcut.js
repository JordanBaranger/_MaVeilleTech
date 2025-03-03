import sequelize from "../database/connect/connect";
import { DataTypes, Model } from "sequelize";

export default class Shortcut extends Model {}

Shortcut.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    url: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    icon_url: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    order_index: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "user",
        key: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
  },
  {
    sequelize,
    modelName: "Shortcut",
    tableName: "shortcut",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);
