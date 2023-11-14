const mongoose = require('mongoose');

const emailSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  }
}, { timestamps: true });

const newsletterSchema = new mongoose.Schema({
  subject: { type: String, required: true },
  message: { type: String, required: true },
  emails: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Email' }],
}, { timestamps: true });

const Email = mongoose.model('Email', emailSchema);
const Newsletter = mongoose.model('Newsletter', newsletterSchema);

module.exports = {
  Newsletter,
  Email
};
