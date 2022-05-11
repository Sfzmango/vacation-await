const { Comment } = require('../models');

const commentsData = [
    {
        commentText: "Here is a comment on the post",
        userId: 1,
    },
    {
        commentText: "This is a great post!",
        userId: 2,
    },
    {
        commentText: "Great Travel plans!",
        userId: 3,
    },
];

const commentSeeds = () => Comment.bulkCreate(commentsData);

module.exports = commentSeeds;