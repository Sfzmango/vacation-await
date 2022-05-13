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
  {
    name: "Mastro's Steakhouse",
    description:
      "Drink Specials, Dinner and a Movie, and Great Desserts all in a Key West Atmosphere. Get here quick, stay for awhile!",
    price: 100,
    rating: 4.5,
    address: "1800 W Hibiscus Blvd Suite 115, Melbourne, FL 32901-2629",
    reviews:
      "Absolutely Wonderful! Food was fantastic, atmosphere is very relaxing! Great place to eat! Our waitress was amazing!",
    contact_number: 3218029648,
    image_url: "This should be image url",
  },
];

const restaurantSeeds = () => Restaurant.bulkCreate(restaurant);

module.exports = restaurantSeeds;
