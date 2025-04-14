const express = require("express");
const app = express()
const mongoose = require('mongoose');
const path = require("path");
const methodOverride = require('method-override');
const engine = require('ejs-mate');
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport")
const LocalStrategy = require('passport-local');

const axios = require("axios");

// Models
const Girl = require("./models/girl");
const Boy = require("./models/boy");
const Women = require("./models/women");
const Men = require("./models/men");
const User = require("./models/user");

// Routes
const girlRouter = require("./routes/girl");
const boyRouter = require("./routes/boy");
const womenRouter = require("./routes/women");
const menRouter = require("./routes/men");
const cartRouter = require("./routes/cart");
const wishlistRouter = require("./routes/wishlist");
const userRouter = require("./routes/user");
const authRouter = require("./routes/auth");

// Middleware setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.engine('ejs', engine);
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.json());

// Session configuration
app.use(session({
    secret: "stylezen secret key",
    resave: false,
    saveUninitialized: true,
    cookie: {
      expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),  
      maxAge: 7 * 24 * 60 * 60 * 1000,  
      httpOnly: true, 
    }  
}));

// Flash messages
app.use(flash());

// Passport configuration
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Flash and user middleware
app.use((req, res, next) => {
  res.locals.successMsg = req.flash("success");
  res.locals.errorMsg = req.flash("error");
  res.locals.currentUser = req.user;
  next();
});

// Home page
app.get("/StyleZen", (req, res) => {
  res.render("clothes/index.ejs");
});

// Mount all routes with consistent path structure
app.use("/StyleZen/girl", girlRouter);
app.use("/StyleZen/boy", boyRouter);
app.use("/StyleZen/women", womenRouter);
app.use("/StyleZen/men", menRouter);
app.use("/StyleZen/cart", cartRouter);
app.use("/StyleZen/wishlist", wishlistRouter);
app.use("/StyleZen/user", userRouter);
app.use("/StyleZen/auth", authRouter);

// Database connection
main()
  .then(() => {console.log("DATABASE CONNECTION SUCCESSFUL")})
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/stylezen');
}

// Handle favicon requests
app.get('/favicon.ico', (req, res) => res.status(204).end());

// Gemini AI Search Route
// app.post("/ask", async (req, res) => {
//   const { query } = req.body;

//   try {
//     const response = await axios.post("http://127.0.0.1:5000/search", {
//       query: query,
//     });

//     const aiResponse = response.data.response;
//     res.json({ response: aiResponse });
//   } catch (error) {
//     console.error("❌ Error contacting Gemini backend:", error.message);
//     res.status(500).json({ error: "Failed to contact Gemini AI service." });
//   }
// });

// app.get("/StyleZen/chatbot", (req, res) => {
//   res.render("partials/chatbot");
// });



// Error handling for undefined routes
app.all("*", (req, res, next) => {
  console.log("Page not found:", req.originalUrl);
  res.status(404).render("error", { message: "Page not found" });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  let { status = 500, message = "Something went wrong" } = err;
  res.status(status).render("error", { message });
});

// Start the server
app.listen(3000, () => {
    console.log("StyleZen server running on port 3000");
});
