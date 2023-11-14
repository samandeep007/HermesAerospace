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

  hours: {
      type: Number,
      required: false
  },

  equipments: {
      type: Number,
      required: false
  },

  projectDescription: {
      type: String,
      required: false
  },

  quote: {
      type: String,
  },

  payment: {
      status: {
          type: String,
          enum: ['pending', 'succeeded', 'failed'],
          default: 'pending'
      },
      amount: {
          type: Number,
          required: true
      },
      stripePaymentId: {
          type: String,
          required: true
      }
  }
}, { timestamps: true });


const Data = mongoose.model('Data', dataSchema);

module.exports = Data;
