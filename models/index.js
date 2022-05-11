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

Plan.belongsTo(Activity, {
  foreignKey: "activity_id",
  // onDelete: "CASCADE",
});

Plan.belongsTo(Hotel, {
  foreignKey: "hotel_id",
  // onDelete: "CASCADE",
});

Plan.belongsTo(Restaurant, {
  foreignKey: "restaurant_id",
  // onDelete: "CASCADE",
});

Activity.hasMany(Plan, {
  foreignKey: "activity_id",
});

Hotel.hasMany(Plan, {
  foreignKey: "hotel_id",
  // constraints: false,
});

Restaurant.hasMany(Plan, {
  foreignKey: "restaurant_id",
  // constraints: false,
});

module.exports = { User, Plan, Comment, Activity, Hotel, Restaurant };
