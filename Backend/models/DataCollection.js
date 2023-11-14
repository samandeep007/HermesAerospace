const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({

    firstName: {
      type: String,
      required: false
    },

    
    lastName: {
        type: String,
        required: false
      },

      
    email: {
        type: String,
        required: false
      },

      
    mobile: {
        type: String,
        required: false
      },

      
    service: {
        type: String,
        required: false
      },

      
    location: {
        type: String,
        required: false
      },

      
    additionalInfo: {
        type: String,
        required: false
      },

      
    projectDescription: {
        type: String,
        required: false
      },

      
    quote: {
        type: String,
      },

      paymentLink: {
        type: String
      }
 
},   { timestamps: true });

const Data = mongoose.model('Data', dataSchema);

module.exports = Data;
