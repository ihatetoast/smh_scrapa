const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//make a Schema for how I want my data to look
//LEARN HOW TO BLOODY SPELL SCHEMA 
//I'd want a headline/title, snippet. if time ... author, url, imgUrl, and time created 
//link note to headline with ObjectID and ref (see last key)

const HeadLineSchema = new Schema({
  headline: {
    type: String,
    unique: true,
    required: true
  },
  snippet: {
    type: String,
    required: false
  },
  articleUrl: {
    type: String,
    required: true,
    trim: true
  },
  notes: [
    {
      type: Schema.Types.ObjectId,
      ref: Note
    }
  ]
});
// create and export model from the above schema, using mongoose's model method
module.exports = mongoose.model("Headline", HeadlineSchema);

