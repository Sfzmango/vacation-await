const { Restaurant } = require("../models");

const restaurant = [
  {
    name: "Vegan Picnic",
    description: "This is fully plant-based “vegan comfort food” spot",
    price: 100,
    rating: 4.5,
    address: "1323 Polk StSan Francisco, CA",
    reviews: "This is really a nice place to visit.They have amazing food!",
    contact_number: 4155086736,
    image_url: "This should be image url",
  },
];

const restaurantSeeds = () => Restaurant.bulkCreate(restaurant);

module.exports = restaurantSeeds;
