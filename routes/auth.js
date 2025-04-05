const express = require("express");
const router = express.Router();
const passport = require("passport");
const User = require("../models/user");

// Register
router.get("/register", (req, res) => {
    res.render("auth/register");
});

router.post("/register", async (req, res) => {
    try {
        const { email, username, password } = req.body;
        const user = new User({ email, username });
        const registeredUser = await User.register(user, password);
        req.login(registeredUser, (err) => {
            if (err) return next(err);
            req.flash("success", "Welcome to StyleZen!");
            res.redirect("/StyleZen");
        });
    } catch (e) {
        req.flash("error", e.message);
        res.redirect("/StyleZen/register");
    }
});

// Login
router.get("/login", (req, res) => {
    res.render("auth/login");
});

router.post("/login", passport.authenticate("local", {
    failureFlash: true,
    failureRedirect: "/StyleZen/login"
}), (req, res) => {
    req.flash("success", "Welcome back!");
    res.redirect("/StyleZen");
});

// Logout
router.get("/logout", (req, res) => {
    req.logout((err) => {
        if (err) return next(err);
        req.flash("success", "Goodbye!");
        res.redirect("/StyleZen");
    });
});

module.exports = router; 