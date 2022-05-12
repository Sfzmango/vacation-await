const router = require("express").Router();
const { Plan } = require("../../models");

// get all plans as a json - working
router.get("/", async (req, res) => {
    const dbPlanData = await Plan.findAll();
    res.status(200).json(dbPlanData);
});

// get a specific plan as a json - working
router.get("/:id", async (req, res) => {
    const dbPlanData = await Plan.findOne({
        where: {
            id: req.params.id
        }
    });

    if (!dbPlanData) {
        res.status(400).json({ message: "Plan not found." });
        return;
    }

    res.status(200).json(dbPlanData);
});

// create a plan into the db. - mostly working, need to get user_id
router.post("/", async (req, res) => {
    /* syntax 
{
"location_name": "Vancouver, Canada",
"location_id": "2",
"user_id": "2",
"activity_id": "2",
"hotel_id": "2",
"restaurant_id": "2",
}
*/

    try {

        console.log(req.session.user_id);
        req.session.loggedIn = true;
        console.log(req.session.loggedIn);
        if (req.session.loggedIn) {
            const dbPlanData = await Plan.create({
                location_name: req.body.location_name,
                location_id: req.body.location_id,
                user_id: req.body.user_id,
                activity_id: req.body.activity_id,
                hotel_id: req.body.hotel_id,
                restaurant_id: req.body.restaurant_id,
            });

            res.status(200).json(dbPlanData);
            console.log({ plan_post_message: "Plan saved successfully" });

        }
        else {
            console.log({ plan_post_message: "Please login in order to save the plan" });
            res.status(404).end();
        }

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// deletes a plan using id params - working
router.delete("/:id", async (req, res) => {

});

module.exports = router;

















