const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const cartItemSchema = new Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        refPath: "cartModel"
    },
    size: String
});

const wishlistItemSchema = new Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        refPath: "wishlistModel"
    }
});

const userSchema = new Schema({
    email: { type: String, required: true },
    cart: [cartItemSchema],
    wishlist: [wishlistItemSchema],
    cartModel: {
        type: String,
        enum: ["Women", "Men", "Kids"]
    },
    wishlistModel: {
        type: String,
        enum: ["Women", "Men", "Kids"]
    }
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);
