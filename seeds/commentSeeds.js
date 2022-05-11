const { Comment } = require("../models");

const commentsData = [
  {
    comment: "Here is a comment on the post",
    user_id: 1,
    plan_id: 1,
  },
];

const commentSeeds = () => Comment.bulkCreate(commentsData);

module.exports = commentSeeds;
