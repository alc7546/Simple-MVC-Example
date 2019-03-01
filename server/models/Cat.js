const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Model
let catModel = {};

// Scheme
const CatSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true, // take off leading/trailing spaces
    unique: true, // only one cat w/ this name can exist
  },

  bedsOwned: {
    type: Number,
    min: 0,
    require: true,
  },

  createdDate: {
    type: Date,
    default: Date.now,
  },
});

CatSchema.statics.sayName = (cat) => {
  console.log(cat.name);
};

CatSchema.statics.findByName = (name, callback) => {
  const search = {
    name,
  };

  return catModel.findOne(search, callback);
};

catModel = mongoose.model('Cat', CatSchema);

module.exports.catModel = catModel;
module.exports.CatSchema = CatSchema;
