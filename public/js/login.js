// checks login
const loginForm = async (event) => {
  event.preventDefault();

  let username = document.querySelector("#loginUsername").value.trim();
  let password = document.querySelector("#loginPassword").value.trim();

  if (username && password) {
    const response = await fetch("/api/user/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to log in.");
    }
  }
};

// creates an account
const signupForm = async (event) => {
  event.preventDefault();

  let username = document.querySelector("#loginUsername").value.trim();
  let password = document.querySelector("#loginPassword").value.trim();
  let testSignup = JSON.stringify({ username, password });
  console.log(testSignup);

  if (username && password) {
    const response = await fetch("/api/user", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to sign up.");
    }
  }
};

// listens to clicks on the login and signup buttons
var loginBtn = document.querySelector(".loginBtn");
if (loginBtn != null) {
  loginBtn.addEventListener("click", loginForm);
} else {
  console.log("loginBtn is Null");
}
var signupBtn = document.querySelector(".signupBtn");
if (signupBtn != null) {
  signupBtn.addEventListener("click", signupForm);
} else {
  console.log("SignupBtn is Null");
}
