const { Comment } = require("../models");

const commentsData = [
  {
    commentText: "Here is a comment on the post",
    user_id: 1,
  },
  {
    commentText: "This is a great post!",
    user_id: 2,
  },
  {
    commentText: "Great Travel plans!",
    user_id: 3,
  },
];

const commentSeeds = () => Comment.bulkCreate(commentsData);

module.exports = commentSeeds;
