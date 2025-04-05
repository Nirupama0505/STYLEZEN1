const Joi = require('joi');

module.exports.productSchema = Joi.object({
  product: Joi.object({
    Brand: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().min(0).required(),
    delivery: Joi.string().required(),
    category: Joi.string().required(),
    gender: Joi.string().required(),
    color: Joi.string(),
    offer: Joi.string(),
    size: Joi.array().items(Joi.string()).required()
  }).required(),
  deleteImages: Joi.array()
});

module.exports.reviewSchema = Joi.object({
  review: Joi.object({
    rating: Joi.number().min(1).max(5).required(),
    comment: Joi.string().required()
  }).required()
}); 