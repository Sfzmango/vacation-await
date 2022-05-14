const router = require("express").Router();
const { User, Plan, Activity, Hotel, Restaurant } = require("../models");
const auth = require("../utils/auth");

// home page
router.get("/", async (req, res) => {
  try {
    // const dbPlanData = Plan.findAll({
    //     include: [{ model: Plan }, { model: Activity }, { model: Hotel }, { model: Restaurant }]
    // });

    // const planData = (await dbPlanData).map((e) => {
    //     e.get({ plain: true });
    // });

    console.log(req.session);
    console.log(req.session.user_id);

    res.render("homepage", {
      loggedIn: req.session.loggedIn,
      user_id: req.session.user_id,
    });
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

// user profile
router.get("/profile", async (req, res) => {
  if (
    req.session.loggedIn == false ||
    req.session.user_id == null ||
    req.session.user_id <= 0
  ) {
    console.log(
      "Potential Error : User is not logged in or user_id is not set in session"
    );
  }

  try {
    const planData = await Plan.findAll({
      where: {
        user_id: req.session.user_id,
      },
      include: [
        {
          model: User,
        },
        {
          model: Hotel,
        },
        {
          model: Activity,
        },
        {
          model: Restaurant,
        },
      ],
    });

    var plans = planData.map((plan) => plan.get({ plain: true }));
    res.render("profile", {
      plans,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// plans
router.get("/plan", auth, async (req, res) => {
  if (
    req.session.loggedIn == false ||
    req.session.user_id == null ||
    req.session.user_id <= 0
  ) {
    console.log(
      "Potential Error : User is not logged in or user_id is not set in session"
    );
  }
  try {
    const planData = await Plan.findAll({
      where: {
        user_id: req.session.user_id,
      },
      include: [
        {
          model: User,
        },
        {
          model: Hotel,
        },
        {
          model: Activity,
        },
        {
          model: Restaurant,
        },
      ],
    });
    var plans = planData.map((plan) => plan.get({ plain: true }));
    res.render("plan", {
      plans,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// modal
router.get("/modal", async (req, res) => {
  try {
    res.render("modal");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
