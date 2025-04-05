
// const Review = require("./review.js");


const mongoose = require("mongoose");

const menSchema = new mongoose.Schema({
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



menSchema.post("findOneAndDelete",async(listing)=>{
    if(listing){
      await Review.deleteMany({_id : {$in : listing.reviews}})
    }
})

const Men = mongoose.model("Men", menSchema);
module.exports = Men;