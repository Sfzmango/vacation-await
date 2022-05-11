const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Hotel extends Model {}

Hotel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    rating: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    reviews: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    contact_number: {
      type: DataTypes.INT,
      allowNull: false,
    },
    image_url: {
      type: DataTypes.VARCHAR(100),
      allowNull: false,
    },
    web_url: {
      type: DataTypes.VARCHAR(100),
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "hotel",
  }
);

module.exports = Hotel;
