const { Hotel } = require("../models");

const hotel = [
  {
    name: "hotel",
    price: 250,
    rating: 4,
    address: "San francisco",
    reviews: "Try this hotel!",
    contact_number: 123456,
    image_url: "This should be image url",
    web_url: "This should be web url",
  },
];

const hotelSeeds = () => Hotel.bulkCreate(hotel);

module.exports = hotelSeeds;
