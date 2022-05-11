const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Plan extends Model {}

Plan.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    location_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    activity_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "activity",
        key: "id",
      },
    },
    hotel_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "hotel",
        key: "id",
      },
    },
    restaurant_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "restaurant",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "plan",
  }
);

module.exports = Plan;
