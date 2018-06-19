const mongoose = require("mongoose");
const Rate = mongoose.model("Rate");

console.log('SERVER > MODELS > cake.js');


var CakeSchema = new mongoose.Schema({
  name: {type: String},
  imgurl: {type: String, default: ""},
  rating: [Rate]
 },
  { timestamps: true }
);

mongoose.model('Cake', CakeSchema); //we are setting this schema in our models as Task