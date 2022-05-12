const { Activity } = require("../models");

const activity = [
  {
    name: "Visit the Golden Gate Bridge",
    description:
      "Visit the city's best-known landmark: the big, beautiful Golden Gate Bridge. This bright orange architectural masterpiece made history in 1937 as the longest suspension bridge ever built, crossing a straight once believed impossible. Visiting the world famous Golden Gate Bridge is a unique experience for everyone. Whether you hike, walk, bike, shop, take a guided tour, or just sit back and take it all in, there is something for everyone. ",
    price: 0,
    rating: 4.5,
    address: "Golden Gate Bridge, San Francisco, CA",
    reviews: "This is fun!",
    contact_number: 4159215858,
    image_url: "This should be image url",
    web_url: "https://www.goldengate.org/",
    opening_hour: 5,
  },
];

const activitySeeds = () => Activity.bulkCreate(activity);

module.exports = activitySeeds;
