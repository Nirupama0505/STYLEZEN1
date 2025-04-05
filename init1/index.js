const mongoose = require('mongoose');
const { kidGirlData } = require('./kidGirl');
const { kidBoyData } = require('./kidBoy');
const { womenData } = require('./women');
const { menData } = require('./men');
const Girl = require('../models/girl');
const Boy = require('../models/boy');
const Women = require('../models/women');
const Men = require('../models/men');

main()
  .then(() => { console.log("CONNECTION SUCCESSFUL") })
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/stylezen');
}

const initDB = async () => {
  try {
    // Clear existing data
    await Girl.deleteMany({});
    await Boy.deleteMany({});
    await Women.deleteMany({});
    await Men.deleteMany({});
    
    console.log("All collections cleared");
    
    // Insert Kid Girl data
    console.log(`Adding ${kidGirlData.length} girl products...`);
    await Girl.insertMany(kidGirlData);
    console.log('Girls data added successfully!');
    
    // Insert Kid Boy data
    console.log(`Adding ${kidBoyData.length} boy products...`);
    await Boy.insertMany(kidBoyData);
    console.log('Boys data added successfully!');
    
    // Insert Women data
    console.log(`Adding ${womenData.length} women products...`);
    await Women.insertMany(womenData);
    console.log('Women data added successfully!');
    
    // Insert Men data
    console.log(`Adding ${menData.length} men products...`);
    await Men.insertMany(menData);
    console.log('Men data added successfully!');
    
    console.log("ALL DATA INITIALIZED SUCCESSFULLY");
  } catch (err) {
    console.log("ERROR INITIALIZING DATA!");
    console.log(err);
  } finally {
    mongoose.connection.close();
  }
};

initDB();
