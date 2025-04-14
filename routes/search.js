const express = require('express');
const router = express.Router();

// If you're using a template engine like EJS
app.get('/', (req, res) => {
  res.render('index');  // Ensure 'index.ejs' exists in your views folder
});


  if (!query) return res.redirect('/');

  const parts = query.trim().toLowerCase().split(/\s+/); // e.g., ['women', 'oversized', 'tshirt']

  const categories = ['women', 'men', 'kids']; // allowed categories
  const products = {
    tshirt: 'Tshirt',
    jeans: 'Jeans',
    kurti: 'Kurti',
    saree: 'Saree',
    hoodie: 'Hoodie',
    jacket: 'Jacket',
    skirt: 'Skirt',
    shirt: 'Shirt'
    // add more as needed
  };

  const category = parts.find(word => categories.includes(word));
  if (!category) return res.redirect('/');

  const productKey = Object.keys(products).find(p => parts.includes(p));
  if (!productKey) return res.redirect('/');

  const product = products[productKey];

  return res.redirect(`/StyleZen/${category}/${product}`);


module.exports = router;
// routes/search.js

module.exports = (app) => {
  app.get('/search', (req, res) => {
    // Your search functionality here
    res.send('Search results');
  });

  // Add other routes for search here if necessary
};
