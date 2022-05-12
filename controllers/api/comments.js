const router = require("express").Router();
const { Comment } = require("../../models");

// get all comments - working
router.get("/", async (req, res) => {
    const dbCommentData = await Comment.findAll();
    res.status(200).json(dbCommentData);
});

// post a comment - mostly working, need to get user_id
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
    try {
        const dbCommentData = await Comment.destroy({
            where: {
                id: req.params.id
            }
        });
        if (!dbCommentData) {
            res.status(404).json({ message: "No comments found with that ID..." });
            return;
        }
        res.status(200).json({ message: "Delete successful" });
        return;
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;