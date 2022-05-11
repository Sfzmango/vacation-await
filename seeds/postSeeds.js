const { Post } = require("../models");

const postData = [
  {
    title: "Los Angeles, California",
    content: "Great place to go! Definitely will go again.",
    user_id: 1
  },
  {
    title: "Miami, Florida",
    content: "Tough to beat the beaches and the food.",
    user_id: 2
  },
  {
    title: "Chicago, Illinois",
    content: "Best trip i have ever gone on.",
    user_id: 3
  },
];

const postSeedData = () => Post.bulkCreate(postData);

module.exports = postSeedData;