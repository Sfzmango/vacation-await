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

});

// deletes a plan using id params - working
router.delete("/:id", async (req, res) => {

});

module.exports = router;









