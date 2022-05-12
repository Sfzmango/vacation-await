const { Hotel } = require("../models");

const hotel = [
  {
    name: "Grand Hyatt",
    price: 370,
    rating: 4,
    address: "345 Stockton Street, San Francisco, California, United States",
    reviews: "Try this hotel!",
    contact_number: 4153981234,
    image_url: "This should be image url",
    web_url:
      "https://www.hyatt.com/en-US/hotel/california/grand-hyatt-san-francisco/sfous",
  },
];

const hotelSeeds = () => Hotel.bulkCreate(hotel);

module.exports = hotelSeeds;
