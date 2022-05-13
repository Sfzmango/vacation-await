const { Hotel } = require("../models");

const hotel = [
  {
    name: "Grand Hyatt",
    price: 370,
    rating: 4,
    address: "345 Stockton Street, San Francisco, California, United States",
    reviews:
      "I stayed at the Grand Hyatt for a business conference. I found the hotel to be modern, clean and comfortable. The lobby area especially offers a nice place to gather. ",
    contact_number: 4153981234,
    image_url: "This should be image url",
    web_url:
      "https://www.hyatt.com/en-US/hotel/california/grand-hyatt-san-francisco/sfous",
  },
  // {
  //   name: "Movenpick Hotel Melbourne",
  //   price: 200,
  //   rating: 4.5,
  //   address: "160 Spencer St, Melbourne, Victoria 3000 Australia",
  //   reviews:
  //     "Beautiful hotel with a welcoming bar, top notch restaurant, relaxing pool /spa and modern room with nice bed and great. Bathroom.",
  //   contact_number: 01161390000810,
  //   image_url: "This should be image url",
  //   web_url:
  //     "https://all.accor.com/hotel/B6L9/index.en.shtml?utm_source=Tripadvisor&utm_medium=Subscription&utm_id=BA",
  // },
];

const hotelSeeds = () => Hotel.bulkCreate(hotel);

module.exports = hotelSeeds;
