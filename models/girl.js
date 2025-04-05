const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const girlSchema = new Schema({
  Brand: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    url: String,
    filename: String
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  delivery: {
    type: String,
    required: true,
  },
  size: [String],
  category: {
    type: String,
    enum: ["Jeans", "T-shirt", "Dress", "Footwear", "Accessory", "Bag", "Skirt", "Watch", "Activewear"],
    required: true
  },
  gender: {
    type: String,
    enum: ["Girl"],
    required: true
  },
  offer: {
    type: String
  },
  color: {
    type: String
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});

const Girl = mongoose.model("Girl", girlSchema);
module.exports = Girl; 