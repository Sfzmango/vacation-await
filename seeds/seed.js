const sequelize = require("../config/connection");

const userSeeds = require("./userSeeds");
const planSeeds = require("./planSeeds");
const commentSeeds = require("./commentSeeds");
const activitySeeds = require("./activitySeeds");
const hotelSeeds = require("./hotelSeeds");
const restaurantSeeds = require("./restaurantSeeds");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await userSeeds();
  await activitySeeds();
  await hotelSeeds();
  await restaurantSeeds();
  await planSeeds();
  await commentSeeds();

  process.exit(0);
};

seedDatabase();
