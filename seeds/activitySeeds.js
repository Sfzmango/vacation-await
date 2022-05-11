const { Activity } = require("../models");

const activity = [
  {
    name: "activity",
    description: "try this activity",
    price: 150,
    rating: 4,
    address: "San francisco",
    reviews: "This is fun!",
    contact_number: 123456,
    image_url: "This should be image url",
    web_url: "This should be web url",
    opening_hour: 10,
  },
];

const activitySeeds = () => Activity.bulkCreate(activity);

module.exports = activitySeeds;
