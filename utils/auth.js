// middleware that checks if the user is logged in and if not, redirct them to the login page.
const auth = (req, res, next) => {
    if (!req.session.loggedIn) {
        res.redirect("/login");
    } else {
        next();
    }
};

// export the authentication function
module.exports = auth;