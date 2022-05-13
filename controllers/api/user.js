const router = require("express").Router();
const { User } = require("../../models");

// create a new user - working
router.post("/", async (req, res) => {
    /* syntax 
    {
    "username": "notmanuel1",
    "password": "password999"
    }
    */

    try {
        const checkUser = await User.findOne({
            where: {
                username: req.body.username
            }
        });

        if (checkUser) {
            res.status(500).json({ message: "User already exists." });
            return;
        }

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

// logs user in - working
router.post("/login", async (req, res) => {
    /* syntax 
    {
    "username": "notmanuel1",
    "password": "password999"
    }
    */

    try {
        const dbUserData = await User.findOne({
            where: {
                username: req.body.username
            }
        });

        if (!dbUserData) {
            res.status(400).json({ message: "Invalid username." });
            return;
        }

        console.log({ db_message: dbUserData.password });
        console.log({ req_message: req.body.password });

        const passwordChecker = await dbUserData.checkPassword(req.body.password);

        console.log({ pc_message: passwordChecker });

        if (!passwordChecker) {
            res.status(400).json({ message: "Invalid password." });
            return;
        }

        req.session.save(() => {
            req.session.loggedIn = true;
            req.session.user_id = dbUserData.id;
            res.status(200).json({ user: dbUserData, message: "Login successful!" });
        });

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// logs user out - working
router.post("/logout", async (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            console.log({ logout_message: "Logout successful" });
            res.status(204).end();
        });
    } else {
        console.log({ logout_message: "Logout error" });
        res.status(404).end();
    }
});

module.exports = router;