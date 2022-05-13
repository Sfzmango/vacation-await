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
  return userPreference;
}

// function checkboxHandler() {
//   var userPreference = getUserPreferences();
//   console.log(userPreference);

//   var activityPreferences = [];

//   if (userPreference.location) {
//     activityPreferences.push(location.value);
//   }
//   if (userPreference.shopping) {
//     activityPreferences.push("shopping");
//   }
//   if (userPreference.sights) {
//     activityPreferences.push("sights");
//   }
//   if (userPreference.museum) {
//     activityPreferences.push("museum");
//   }
//   if (userPreference.nature) {
//     activityPreferences.push("nature");
//   }
//   if (userPreference.vegan) {
//     activityPreferences.push("vegan");
//   }
//   if (userPreference.glutenfree) {
//     activityPreferences.push("glutenfree");
//   }
//   if (userPreference.vegetarian) {
//     activityPreferences.push("vegetarian");
//   }
//   if (userPreference.asian) {
//     activityPreferences.push("asian");
//   }
//   if (userPreference.american) {
//     activityPreferences.push("american");
//   }
//   if (userPreference.european) {
//     activityPreferences.push("european");
//   }
//   if (userPreference.freewifi) {
//     activityPreferences.push("freewifi");
//   }
//   if (userPreference.spa) {
//     activityPreferences.push("spa");
//   }
//   if (userPreference.noOfAdults) {
//     activityPreferences.push(noOfAdults.value);
//   }
//   if (userPreference.noOfNights) {
//     activityPreferences.push(noOfNights.value);
//   }
//   if (userPreference.noOfRooms) {
//     activityPreferences.push(noOfRooms.value);
//   }

//   console.log(activityPreferences);
//   return activityPreferences;
// }

document
  .getElementById("formsubmitbutton")
  .addEventListener("click", getUserPreferences);

module.exports = userPreference;
