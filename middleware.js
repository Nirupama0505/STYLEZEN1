const Girl = require("./models/girl");
const Boy = require("./models/boy");
const Women = require("./models/women");
const Men = require("./models/men");
const expresserror = require("./utils/expresserror");
const { productSchema, reviewSchema } = require("./schema");

module.exports.isLogged = (req, res, next) => {
  console.log(req.path, "..", req.originalUrl);

  if (!req.isAuthenticated()) {
    req.session.redirectUrl = req.originalUrl;
    req.flash("error", "You must be logged in!");
    return res.redirect("StyleZen/login");
  }
  next();
};

module.exports.saveRedirectUrl = (req, res, next) => {
  if (req.session.redirectUrl) {
    res.locals.redirectUrl = req.session.redirectUrl;
    delete req.session.redirectUrl;
  }
  next();
};

module.exports.isOwner = async(req, res, next) => {
  let { id } = req.params;
  let { category } = req.query;
  
  let product;
  
  if (category === "girl") {
    product = await Girl.findById(id);
  } else if (category === "boy") {
    product = await Boy.findById(id);
  } else if (category === "women") {
    product = await Women.findById(id);
  } else if (category === "men") {
    product = await Men.findById(id);
  }

  if (!product || !product.owner || !product.owner.equals(res.locals.currUser._id)) {
    req.flash("error", "You are not the owner of this product");
    return res.redirect(`/${category}/${id}`);
  }
  next();
};

module.exports.validateProduct = (req, res, next) => {
  let { error } = productSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new expresserror(400, errMsg);
  } else {
    next();
  }
};

module.exports.validateReview = (req, res, next) => {
  let { error } = reviewSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new expresserror(400, errMsg);
  } else {
    next();
  }
};

module.exports.isReviewAuthor = async(req, res, next) => {
  let { id, reviewId } = req.params;
  let { category } = req.query;
  
  let review;
  
  if (category === "girl") {
    review = await Girl.findOne({ _id: id, "reviews._id": reviewId }, { "reviews.$": 1 });
  } else if (category === "boy") {
    review = await Boy.findOne({ _id: id, "reviews._id": reviewId }, { "reviews.$": 1 });
  } else if (category === "women") {
    review = await Women.findOne({ _id: id, "reviews._id": reviewId }, { "reviews.$": 1 });
  } else if (category === "men") {
    review = await Men.findOne({ _id: id, "reviews._id": reviewId }, { "reviews.$": 1 });
  }

  if (!review || !review.reviews[0].author.equals(res.locals.currUser._id)) {
    req.flash("error", "You are not the author of this review");
    return res.redirect(`/${category}/${id}`);
  }
  next();
};
