const router = require("express").Router();
const { Comment } = require("../../models");

// get all comments - working
router.get("/", async (req, res) => {
    const dbCommentData = await Comment.findAll();
    res.status(200).json(dbCommentData);
});

// post a comment - working
router.post("/", async (req, res) => {

});

// delete a comment - working
router.delete("/:id", async (req, res) => {

});

module.exports = router;




