
// const Review = require("./review.js");


const mongoose = require("mongoose");

const womenSchema = new mongoose.Schema({
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
    filename: String,
  },
  price: {
    type: Number,
    required: true,
  },
  offer: {
    type: String,
    required: true,
  },
  delivery: {
    type: String,
    required: true,
  },
  size: {
    type: [String], // Array of strings for multiple sizes (e.g., "XS", "S", etc.)
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  bodyType: {
    type: [String], // Accepts an array of strings
    enum: ["All Body Types", "Hourglass", "Pear-Shaped", "Apple", "Rectangle", "Inverted Triangle"],
    required: true,
  }
  ,
  gender: {
    type: String,
    required: true,
  },
  owner:
      {
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
      },
      category : {
        type : String,
      },
});



womenSchema.post("findOneAndDelete",async(listing)=>{
    if(listing){
      await Review.deleteMany({_id : {$in : listing.reviews}})
    }
})

const Women = mongoose.model("Women", womenSchema);
module.exports = Women;