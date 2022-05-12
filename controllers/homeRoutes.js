const router = require("express").Router();
const { User, Plan, Comment } = require("../models");
const auth = require("../utils/auth");

// home page
router.get("/", async (req, res) => {
    try {
        res.render("test");
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// login 
router.get("/login", async (req, res) => {
    try {
        res.render("login");
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// signup
router.get("/signup", async (req, res) => {
    try {
        res.render("signup");
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;