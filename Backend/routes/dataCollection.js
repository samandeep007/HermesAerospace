const express = require('express');
const Data = require('../models/DataCollection');
const nodemailer = require('nodemailer');

const router = express.Router();

// GET all appointments
router.get('/', async (req, res) => {
  try {
    const data = await Data.find();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// GET a specific quote by token
router.get('/:id', async (req, res) => {
  try {
  const data = await Data.findById(req.params.id);
  if (data) {
  res.status(200).json(data);
  } else {
  res.status(404).json({ message: 'Quote not found' });
  }
  } catch (err) {
  res.status(500).json({ message: err.message });
  }
  });
  


// POST a new quote
router.post('/', async (req, res) => {
  const quote = new Data({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    mobile: req.body.mobile,
    service: req.body.service,
    location: req.body.location,
    additionalInfo: req.body.additionalInfo,
    projectDescription: req.body.projectDescription,
  });

  try {
    const newQuote = await quote.save();
  
  // Define transporter for sending email
const transporter = nodemailer.createTransport({
  host: 'email-smtp.us-east-1.amazonaws.com',
  port: 587,
  secure: false,
  auth: {
    user: 'AKIAWGYYQUSDD2M77SWD',
    pass: 'BOLMlE7AUuCXWe9S4Iv55feseBNHuU+fG/OiLkmUgKG+'
  },
});

// Define email message option
const mailOptions = {
  from: 'Hermes Aerospace Corporation <hermesaero007@gmail.com>',
  to: req.body.email,
  subject: 'New Data Confirmation',
  text: `Dear ${req.body.firstName} ${req.body.lastName}, \n\nThank you for requesting a quote for ${req.body.service}. Out team will get in touch with you see with the estimated cost and details. \n\n Best regards, \nHermes Aerospace Corporation`,
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
  
    res.status(201).json(newQuote);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
  
});


router.put('/:id', async (req, res) => {
  try {
    const quote = await Data.findById(req.params.id);
    if (quote) {
      quote.firstName = req.body.firstName || quote.firstName;
      quote.lastName = req.body.lastName || quote.lastName;
      quote.email = req.body.email || quote.email;
      quote.mobile = req.body.mobile || quote.mobile;
      quote.service = req.body.service ||   quote.service;
      quote.location = req.body.location || quote.location;
      quote.projectDescription = req.body.projectDescription || quote.projectDescription;
      quote.additionalInfo = req.body.additionalInfo || quote.additionalInfo;
      quote.quote = req.body.quote || quote.quote;
      quote.paymentLink = req.body.paymentLink || quote.paymentLink;

      const updatedQuote = await quote.save();

      
        // Define transporter for sending email
        const transporter = nodemailer.createTransport({
          host: 'email-smtp.us-east-1.amazonaws.com',
          port: 587,
          secure: false,
          auth: {
            user: 'AKIAWGYYQUSDD2M77SWD',
            pass: 'BOLMlE7AUuCXWe9S4Iv55feseBNHuU+fG/OiLkmUgKG+'
          },
        });

        // Define email message option
        const mailOptions = {
          from: 'Hermes Aerospace Corporation <hermesaero007@gmail.com>',
          to: quote.email,
          subject: 'You have received a quote',
          text: `Dear ${quote.firstName} ${quote.lastName},\n\nWe trust this email finds you well. We are pleased to provide you with the quotation for the ${quote.service} Service you have requested. The total amount for the service is $ ${quote.quote} .\n\nOur team recognizes the significance of convenient and secure payment methods for our customers. Therefore, we have included a payment link below. The link will direct you to our online payment gateway, where you can easily complete the payment process.\n\n${quote.paymentLink}\n\nPlease note that the payment link will be active for 15 days only. We kindly request that you make the payment before the link expires. Upon receipt of your payment, we will proceed with your Service and keep you updated on its progress.\n\nIf you have any inquiries or concerns regarding the quotation or payment process, please feel free to contact us. Our team is always available to assist you.\n\nThank you for considering our ${quote.service} Service. We look forward to the opportunity to serve you.\n\nSincerely,\nHermes Aerospace Corporation
          `,
        };

        // Send email
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + info.response);
          }
        });
      

      res.status(200).json(updatedQuote);
    } else {
      res.status(404).json({ message: 'Quote not found' });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


// DELETE an Data by ID
router.delete('/:id', async (req, res) => {
  try {
    const quote = await Data.findById(req.params.id);
    if (quote) {
      await quote.remove();
      res.status(200).json({ message: 'Quote deleted' });
    } else {
      res.status(404).json({ message: 'Quote not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});



module.exports = router;
