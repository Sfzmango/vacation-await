const router = require("express").Router();

const userRoute = require("./user");
// const plansRoute = require("./plans");
// const commentsRoute = require("./comments");

router.use("/user", userRoute);
// router.use("/plans", plansRoute);
// router.use("/comments", commentsRoute);

module.exports = router;