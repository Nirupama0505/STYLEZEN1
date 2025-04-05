const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const boySchema = new Schema({
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
    enum: ['Jeans', 'T-shirt', 'Shirt', 'Footwear', 'Activewear', 'Accessory', 'Watch'],
    required: true
  },
  gender: {
    type: String,
    enum: ['Boy'],
    required: true
  },
  offer: String,
  color: String,
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});

const Boy = mongoose.model("Boy", boySchema);
module.exports = Boy; 