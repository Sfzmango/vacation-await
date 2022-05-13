var userPreference;

function getUserPreferences() {
    userPreference = {};
    userPreference.location = document.getElementById("location").value;
    userPreference.shopping = document.getElementById("shopping").checked;
    userPreference.sights = document.getElementById("sights").checked;
    userPreference.museum = document.getElementById("museum").checked;
    userPreference.nature = document.getElementById("nature").checked;
    userPreference.vegan = document.getElementById("vegan").checked;
    userPreference.glutenfree = document.getElementById("glutenfree").checked;
    userPreference.vegetarian = document.getElementById("vegetarian").checked;
    userPreference.asian = document.getElementById("asian").checked;
    userPreference.american = document.getElementById("american").checked;
    userPreference.european = document.getElementById("european").checked;
    userPreference.freewifi = document.getElementById("freewifi").checked;
    userPreference.spa = document.getElementById("spa").checked;
    userPreference.noOfAdults = document.getElementById("noOfAdults").value;
    userPreference.noOfNights = document.getElementById("noOfNights").value;
    userPreference.noOfRooms = document.getElementById("noOfRooms").value;
    console.log(userPreference);



    let location_name = userPreference.location;
    let numAdults = userPreference.noOfAdults;
    let numRooms = userPreference.noOfRooms;
    let numNights = userPreference.noOfNights;
    let hotelFilters = "free_wireless_internet_in_room";
    let activityFilters = 47;
    let cuisuineFilters = 9908;
    let dietRestrictions = 10665;
    let randomHotelInfo;
    let randomActivityInfo;
    let randomRestaurantInfo;



    const apiKey = {
        method: "GET",
        headers: {
            "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
            "X-RapidAPI-Key": "3a79c109bemshab3af2a312fbbd8p173ab8jsn5f9ae7456df6"
        }
    };

    console.log("Converting location name to ID...");

    // gets the location id
    fetch(`https://travel-advisor.p.rapidapi.com/locations/search?query=${location_name}&limit=30&units=km&currency=USD&sort=relevance&lang=en_US`, apiKey)
        .then(res => res.json())
        .then((res) => {
            let locationRes = res;
            console.log(locationRes);

            // get the location id from the api
            let location_id = locationRes.data[0].result_object.location_id;
            console.log("Location ID: ", location_id);


            // ================ Generating Hotel ================



            console.log("Grabbing list of hotels from the location ID...");


            // gets a random hotel id
            fetch(`https://travel-advisor.p.rapidapi.com/hotels/list?location_id=${location_id}&adults=${numAdults}&rooms=${numRooms}&nights=${numNights}&currency=USD&amenities=${hotelFilters}&order=asc&limit=30&sort=recommended&lang=en_US`, apiKey)
                .then(res => res.json())
                .then((res) => {
                    let hotelData = res.data;
                    console.log(hotelData);
                    let randomHotelIndex = Math.floor(Math.random() * (hotelData.length));
                    console.log("Selected index: ", randomHotelIndex);
                    let randomHotelId = hotelData[randomHotelIndex].location_id;

                    console.log("Selecting a random hotel...");

                    // get hotel details
                    fetch(`https://travel-advisor.p.rapidapi.com/hotels/get-details?location_id=${randomHotelId}&adults=${numAdults}&lang=en_US&currency=USD&nights=${numNights}&rooms=${numRooms}`, apiKey)
                        .then(response => response.json())
                        .then((res) => {

                            let hotelInfo = res.data[0];

                            randomHotelInfo = {
                                "name": hotelInfo.name,
                                "price": hotelInfo.price,
                                "rating": hotelInfo.rating,
                                "address": hotelInfo.address,
                                "reviews": hotelInfo.room_tips,
                                "contact_number": hotelInfo.phone,
                                "image_url": hotelInfo.photo.images.large.url,
                                "web_url": hotelInfo.web_url
                            };

                            console.log("Hotel Generated: ", randomHotelInfo);

                            // ============= write save hotel code into db here =========================


                            // ================ Generating Activity ================

                            console.log("Grabbing list of activities from the location ID...");

                            // gets a random activity
                            fetch(`https://travel-advisor.p.rapidapi.com/attractions/list?location_id=${location_id}&currency=USD&lang=en_US&lunit=mi&sort=recommended&subcategory=${activityFilters}`, apiKey)
                                .then(response => response.json())
                                .then((res) => {

                                    let activityData = res.data;
                                    console.log(activityData);
                                    let randomActivityIndex;
                                    function genActivityIndex() {
                                        randomActivityIndex = Math.floor(Math.random() * (activityData.length));
                                        if (randomActivityIndex === 6) {
                                            genActivityIndex();
                                        }
                                    }
                                    genActivityIndex();
                                    console.log("Selected index: ", randomActivityIndex);
                                    let randomActivityId = activityData[randomActivityIndex].location_id;

                                    console.log("Selecting a random activity...");

                                    // get activity details
                                    fetch(`https://travel-advisor.p.rapidapi.com/restaurants/get-details?location_id=${randomActivityId}&currency=USD&lang=en_US`, apiKey)
                                        .then(response => response.json())
                                        .then((res) => {

                                            let activityInfo = res;

                                            let activityMin;
                                            let activityMax;

                                            function activityPriceRange(e) {
                                                let tempArr = [];
                                                // gets all the prices
                                                for (let i = 0; i < e.length; i++) {
                                                    let tempPrice = e[i].price;
                                                    console.log(tempPrice);
                                                    let tpn = tempPrice.replace("$", "");
                                                    console.log(tpn);
                                                    tempArr.push(tpn);
                                                }
                                                console.log(tempArr);
                                                activityMin = Math.min(...tempArr);
                                                activityMax = Math.max(...tempArr);
                                                console.log("Min:", activityMin, "Max:", activityMax);
                                            }

                                            if ("offer_group" in activityInfo) {
                                                activityPriceRange(activityInfo.offer_group.offer_list);
                                            }

                                            let activityPhotos = "https://demofree.sirv.com/nope-not-here.jpg";
                                            if (activityInfo.photo.images.original.url) {
                                                activityPhotos = activityInfo.photo.images.original.url;
                                            }

                                            randomActivityInfo = {
                                                "name": activityInfo.name,
                                                "description": activityInfo.description,
                                                "price": `$${activityMin} - $${activityMax}`,
                                                "rating": activityInfo.rating,
                                                "address": activityInfo.address,
                                                "reviews": activityInfo.reviews,
                                                "contact_number": activityInfo.phone,
                                                "image_url": activityPhotos,
                                                "web_url": activityInfo.web_url,
                                                "hours": activityInfo.hours,
                                            };

                                            console.log("Activity Generated: ", randomActivityInfo);

                                            // =========== write save activity code into db here ====================



                                            // ================ Generating restaurant ================

                                            console.log("Grabbing list of restaurants from the location ID...");

                                            // gets a random restaurant id
                                            fetch(`https://travel-advisor.p.rapidapi.com/restaurants/list?location_id=${location_id}&combined_food=${cuisuineFilters}&currency=USD&lunit=mi&dietary_restrictions=${dietRestrictions}limit=30&lang=en_US`, apiKey)
                                                .then(response => response.json())
                                                .then((res) => {

                                                    let restaurantData = res.data;
                                                    console.log(restaurantData);
                                                    let randomRestaurantIndex = Math.floor(Math.random() * (restaurantData.length));
                                                    console.log("Selected index: ", randomRestaurantIndex);
                                                    let randomRestaurantId = restaurantData[randomRestaurantIndex].location_id;

                                                    console.log("Selecting a random restaurant...");

                                                    // get restaurant details
                                                    fetch(`https://travel-advisor.p.rapidapi.com/restaurants/get-details?location_id=${randomRestaurantId}&currency=USD&lang=en_US`, apiKey)
                                                        .then(response => response.json())
                                                        .then((res) => {

                                                            let restaurantInfo = res;

                                                            randomRestaurantInfo = {
                                                                "name": restaurantInfo.name,
                                                                "description": restaurantInfo.description,
                                                                "price": restaurantInfo.price,
                                                                "rating": restaurantInfo.rating,
                                                                "address": restaurantInfo.address,
                                                                "reviews": restaurantInfo.reviews,
                                                                "contact_number": restaurantInfo.phone,
                                                                "image_url": restaurantInfo.photo.images.original.url,
                                                                "web_url": restaurantInfo.website,
                                                                "hours": restaurantInfo.hours,
                                                            };

                                                            console.log("===========================================");
                                                            console.log("Hotel Generated: ", randomHotelInfo);
                                                            console.log("Activity Generated: ", randomActivityInfo);
                                                            console.log("Restaurant Generated: ", randomRestaurantInfo);

                                                            // ============= write save restaurant code into db here =========================
                                                        });
                                                });
                                        });
                                });
                        });
                });
        }).catch(function (err) {
            console.error(err);
        });



}

document
    .getElementById("formsubmitbutton")
    .addEventListener("click", getUserPreferences);