const { Plan } = require("../models");

const planData = [
  {
    id: 1,
    location_name: "San Francisco, California",
    location_id: 1,
    user_id: 1,
    activity_id: 1,
    hotel_id: 1,
    restaurant_id: 1,
  },
  {
    id: 2,
    location_name: "Melbourne, Australia",
    location_id: 2,
    user_id: 2,
    activity_id: 2,
    hotel_id: 2,
    restaurant_id: 2,
  },
];

const planSeedData = () => Plan.bulkCreate(planData);

module.exports = planSeedData;
