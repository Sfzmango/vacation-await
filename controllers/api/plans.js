const router = require("express").Router();
const { Plan, Activity, Hotel, Restaurant } = require("../../models");

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
router.post("/activity", async (req, res) => {
    /* syntax 
{
                name: "Rollerskating",
                description: "Fun activity",
                price: "$25",
                rating: "5",
                address: "1111 St, San Francisco, CA 94125",
                reviews: "Great",
                contact_number: "14151234567",
                web_url: "www.google.com",
}
*/

    try {

        console.log(req.session.user_id);
        req.session.loggedIn = true;
        console.log(req.session.loggedIn);
        if (req.session.loggedIn) {

            const dbActivityData = await Activity.create({
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                rating: req.body.rating,
                address: req.body.address,
                reviews: req.body.reviews,
                contact_number: req.body.contact_number,
                web_url: req.body.web_url,
            });

            res.status(200).json(dbActivityData);
            console.log({ plan_post_message: "Activity saved successfully" });

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

// create a plan into the db. - mostly working, need to get user_id
router.post("/hotel", async (req, res) => {
    /* syntax 
{
                name: "Marriott",
                price: "$200",
                rating: "5",
                address: "1111 St, San Francisco, CA 94125",
                reviews: "Great",
                contact_number: "14151234567",
                image_url: "www.<imagewebpage>.com"
                web_url: "www.google.com",
}
*/

    try {

        console.log(req.session.user_id);
        req.session.loggedIn = true;
        console.log(req.session.loggedIn);
        if (req.session.loggedIn) {

            const dbHotelData = await Hotel.create({
                name: req.body.name,
                price: req.body.price,
                rating: req.body.rating,
                address: req.body.address,
                reviews: req.body.reviews[0].text,
                contact_number: req.body.contact_number,
                image_url: req.body.image_url,
                web_url: req.body.web_url,
            });

            res.status(200).json(dbHotelData);
            console.log({ plan_post_message: "Hotel saved successfully" });

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

// create a plan into the db. - mostly working, need to get user_id
router.post("/restaurant", async (req, res) => {
    /* syntax 
{
                name: "Benihana",
                description: "Hibachi",
                price: "$100",
                rating: "5",
                address: "1111 St, San Francisco, CA 94125",
                reviews: "Great",
                contact_number: "14151234567",
                image_url: "www.<imagewebpage>.com"
}
*/

    try {

        console.log(req.session.user_id);
        req.session.loggedIn = true;
        console.log(req.session.loggedIn);
        if (req.session.loggedIn) {

            const dbRestaurantData = await Restaurant.create({
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                rating: req.body.rating,
                address: req.body.address,
                reviews: req.body.reviews[0].summary,
                contact_number: req.body.contact_number,
                image_url: req.body.image_url,
            });

            res.status(200).json(dbRestaurantData);
            console.log({ plan_post_message: "Restaurant saved successfully" });

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


// create a plan into the db. - mostly working, need to get user_id
router.post("/plan", async (req, res) => {
    /* syntax 
{
"location_name": "Vancouver, Canada",
"location_id": "2",
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
                user_id: req.session.user_id,
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
    try {
        const dbPlanData = await Plan.destroy({
            where: {
                id: req.params.id
            }
        });
        if (!dbPlanData) {
            res.status(404).json({ message: "No plans found with that ID..." });
            return;
        }
        res.status(200).json({ message: "Delete successful" });
        return;
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;