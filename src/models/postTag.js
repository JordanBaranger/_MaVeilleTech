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
            type: DataTypes.STRING,
            allowNull: false,
        },
        post_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: "PostTag",
        tableName: "post_tag",
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated
    }
);