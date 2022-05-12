const axios = require("axios");

let location_id;

const options = {
    method: "GET",
    url: "https://travel-advisor.p.rapidapi.com/locations/search",
    params: {
        query: "San Francisco",
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

axios.request(options)
    .then((res) => {
        let locationRes = res.data;
        console.log(locationRes.data);
        console.log("Testing below");

        // I want to get the location id from the api
        location_id = locationRes.data[0].result_object.location_id;
        console.log(location_id);


    })
    .catch(function (err) {
        console.error(err);
    });