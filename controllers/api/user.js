const router = require("express").Router();
const { User } = require("../../models");

// create a new user
router.post("/", async (req, res) => {
    try {
        const dbUserData = await User.create({
            username: req.body.username,
            password: req.body.password
        });

        req.session.save(() => {
            req.session.loggedIn = true;
            res.status(200).json(dbUserData);
        });

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// logs user in
router.post("/login", async (req, res) => {

});

// logs user out
router.post("/logout", async (req, res) => {

});

module.exports = router;


