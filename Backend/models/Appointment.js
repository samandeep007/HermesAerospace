const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  token: {
    type: String,
    unique: true,
    required: true,
    },

    firstName: {
      type: String,
      required: true,
    },

    lastName: {
      type: String,
      required: true,
    },

    companyName: {
      type: String,
    },

    email: {
      type: String,
      required: true,
    },

    isExistingCustomer: {
      type: String,
   
    },
    
    mobile: {
      type: String,
      required: true,
    },

    projectDescription: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      default: "pending"
    },

    appointmentDate: {
      type: String,
    },

    appointmentStart: {
      type: String
    },

    appointmentEnd: {
      type: String
    },

    meetingLink: {
      type: String
    }

 
},   { timestamps: true });

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;
