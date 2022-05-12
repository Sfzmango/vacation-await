const axios = require("axios");

let location_name = "San Francisco";
let numAdults = 1;
let numRooms = 1;
let numNights = 2;
let budget = 500;
let hotelBudget = budget / 8 * 3;
let hotelFilters;

const location = {
    method: "GET",
    url: "https://travel-advisor.p.rapidapi.com/locations/search",
    params: {
        query: location_name,
        limit: "30",
        units: "mi",
        currency: "USD",
        sort: "relevance",
        lang: "en_US"
    },
    headers: {
        "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
        "X-RapidAPI-Key": "3a79c109bemshab3af2a312fbbd8p173ab8jsn5f9ae7456df6"
    }
};

console.log("Converting location name to ID...");

// gets the location id
axios.request(location)
    .then((res) => {
        let locationRes = res.data;
        console.log(locationRes.data);

        // get the location id from the api
        let location_id = locationRes.data[0].result_object.location_id;
        console.log(location_id);
        console.log("Grabbing list of hotels from the location ID...");

        const hotelOptions = {
            method: "GET",
            url: "https://travel-advisor.p.rapidapi.com/hotels/list",
            params: {
                location_id: location_id,
                adults: numAdults,
                rooms: numRooms,
                nights: numNights,
                pricesmax: hotelBudget,
                currency: "USD",
                amenities: hotelFilters,
                limit: "30",
                sort: "recommended",
                lang: "en_US"
            },
            headers: {
                "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
                "X-RapidAPI-Key": "3a79c109bemshab3af2a312fbbd8p173ab8jsn5f9ae7456df6"
            }
        };

        // gets a random hotel id
        axios.request(hotelOptions)
            .then((res) => {
                let hotelData = res.data.data;
                console.log(hotelData);
                let randomHotelIndex = Math.floor(Math.random() * (hotelData.length));
                console.log("Selected index: ", randomHotelIndex);
                let randomHotelId = hotelData[randomHotelIndex].location_id;

                console.log("Selecting a random hotel...");

                const hotelDetails = {
                    method: "GET",
                    url: "https://travel-advisor.p.rapidapi.com/hotels/get-details",
                    params: {
                        location_id: randomHotelId,
                        adults: numAdults,
                        lang: "en_US",
                        currency: "USD",
                        nights: numNights,
                        rooms: numRooms
                    },
                    headers: {
                        "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
                        "X-RapidAPI-Key": "3a79c109bemshab3af2a312fbbd8p173ab8jsn5f9ae7456df6"
                    }
                };

                // get hotel details
                axios.request(hotelDetails)
                    .then((res) => {

                        let hotelInfo = res.data.data[0];

                        let randomHotelInfo = {
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
                    });
            });

    }).catch(function (err) {
        console.error(err);
    });