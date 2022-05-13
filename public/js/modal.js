function getUserPreferences() {
  var userPreference = {};
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
  userPreference.noOfAdults = document.getElementById("noOfAdults").checked;
  userPreference.noOfNights = document.getElementById("noOfNights").checked;
  userPreference.noOfRooms = document.getElementById("noOfRooms").checked;

  return userPreference;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
