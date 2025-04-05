const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const Women = require("../models/women.js");
const Men = require("../models/men.js");
const Girl = require("../models/girl.js");
const Boy = require("../models/boy.js");

// Signup Page Route (GET)
router.get("/signup", (req, res) => {
    res.render("users/signup.ejs");
});

// Signup Form Submission (POST)
router.post("/signup", async (req, res, next) => {
    try {
        let { username, email, password } = req.body;
        const newUser = new User({ email, username });
        const userRegistered = await User.register(newUser, password);

        req.login(userRegistered, (err) => {
            if (err) return next(err);
            req.flash("success", "Welcome to StyleZen. Your account has been created!");
            res.redirect("/StyleZen");
        });
    } catch (e) {
        req.flash("error", e.message);
        res.redirect("/signup");
    }
});

// Login Page Route (GET)
router.get("/login", (req, res) => {
    res.render("users/login.ejs");
});

// Login Form Submission (POST)
router.post(
    "/login",
    passport.authenticate("local", {
      failureRedirect: "/StyleZen/login",
      failureFlash: "Invalid username or password!",
    }),
    (req, res) => {
      let redirectUrl = req.session.redirectUrl || "/StyleZen";
      req.flash("success", "Welcome back to StyleZen!");
      res.redirect(redirectUrl);
    }
);
  
// Logout Route (GET)
router.get("/logout", (req, res, next) => {
    req.logout((err) => {
        if (err) return next(err);
        req.flash("success", "You have logged out successfully!");
        res.redirect("/StyleZen");
    });
});

module.exports = router;
