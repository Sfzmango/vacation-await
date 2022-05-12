const router = require("express").Router();
const { Comment } = require("../../models");

// get all comments - working
router.get("/", async (req, res) => {
    const dbCommentData = await Comment.findAll();
    res.status(200).json(dbCommentData);
});

// post a comment - working
router.post("/", async (req, res) => {

    /* syntax 
        {
        "comment": "test comment",
        "user_id": 1,
        "plan_id": 1
        }
        */

    try {
        const dbCommentData = await Comment.create({
            comment: req.body.comment,
            user_id: req.body.user_id,
            plan_id: req.body.plan_id,
        });
        console.log({ message: "Comment added successfully!" });
        res.status(200).json(dbCommentData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// delete a comment - working
router.delete("/:id", async (req, res) => {

});

module.exports = router;


