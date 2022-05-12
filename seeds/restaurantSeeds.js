const { Restaurant } = require("../models");

const restaurant = [
  {
    name: "Mastro's Steakhouse",
    description: "We have steak, seafood & sushi.",
    price: 100,
    rating: 4.5,
    address: "399 Geary St, San Francisco, CA 94102",
    reviews:
      "Mastro's collection of sophisticated, classic Steakhouses and Ocean Club seafood locations are recognized for their combination of world-class service, highly acclaimed cuisine, and live entertainment in an elegant yet energetic atmosphere. A truly unparalleled dining experience.",
    contact_number: 4153639539,
    image_url: "This should be image url",
  },
];

const restaurantSeeds = () => Restaurant.bulkCreate(restaurant);

module.exports = restaurantSeeds;
