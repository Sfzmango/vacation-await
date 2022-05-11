const { Restaurant } = require("../models");

const restaurant = [
  {
    name: "restaurant",
    description: "This is restaurant description",
    price: 100,
    rating: 4,
    address: "San francisco",
    reviews: "Try this restaurant!",
    contact_number: 123456,
    image_url: "This should be image url",
  },
];

const restaurantSeeds = () => Restaurant.bulkCreate(restaurant);

module.exports = restaurantSeeds;
