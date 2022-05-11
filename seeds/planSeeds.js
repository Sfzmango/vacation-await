const { Plan } = require("../models");

const planData = [
  {
    id: 1,
    location_name: "Los Angeles, California",
    location_id: 1,
    user_id: 1,
    activity_id: 1,
    hotel_id: 1,
    restaurant_id: 1,
  },
];

const planSeedData = () => Plan.bulkCreate(planData);

module.exports = planSeedData;
