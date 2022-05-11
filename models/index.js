const User = require("./User");
const Plan = require("./Plan");
const Comment = require("./Comment");
const Activity = require("./Activity");
const Hotel = require("./Hotel");
const Restaurant = require("./Restaurant");

User.hasMany(Plan, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Plan.belongsTo(User, {
  foreignKey: "user_id",
});

Plan.hasMany(Comment, {
  foreignKey: "plan_id",
  onDelete: "CASCADE",
});

Comment.belongsTo(Plan, {
  foreignKey: "plan_id",
});

User.hasOne(Comment, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
});

Plan.hasOne(Activity, {
  foreignKey: "activity_id",
  onDelete: "CASCADE",
});

Plan.hasOne(Hotel, {
  foreignKey: "hotel_id",
  onDelete: "CASCADE",
});

Plan.hasOne(Restaurant, {
  foreignKey: "restaurant_id",
  onDelete: "CASCADE",
});

Activity.belongsTo(Plan, {
  foreignKey: "activity_id",
});

Hotel.belongsTo(Plan, {
  foreignKey: "hotel_id",
});

Restaurant.belongsTo(Plan, {
  foreignKey: "restaurant_id",
});

module.exports = { User, Plan, Comment, Activity, Hotel, Restaurant };
