const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({

    name: {
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

    message: {
      type: String,
      required: false
    },

    subject: {
      type: String,
      required: false
    },

    reply: {
      type: String,
      required: false
    },

    

 
},   { timestamps: true });

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
