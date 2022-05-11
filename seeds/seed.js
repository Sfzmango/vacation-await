const sequelize = require("../config/connection");

const userSeeds = require("./userSeeds");
const postSeeds = require("./postSeeds");
const commentSeeds = require("./commentSeeds");
const activitySeeds = require("./activitySeeds");
const hotelSeeds = require("./hotelSeeds");
const restaurantSeeds = require("./restaurantSeeds");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await userSeeds();
  await postSeeds();
  await commentSeeds();
  await activitySeeds();
  await hotelSeeds();
  await restaurantSeeds();

  process.exit(0);
};

seedDatabase();
