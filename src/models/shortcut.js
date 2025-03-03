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
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    icon_url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    order_index: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
