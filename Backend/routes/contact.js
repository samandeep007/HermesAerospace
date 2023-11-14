const express = require('express');
const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');

const router = express.Router();

// GET all messages
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// GET a specific message by token
router.get('/:id', async (req, res) => {
  try {
  const contact  = await Contact.findById(req.params.id);
  if (contact) {
  res.status(200).json(contact);
  } else {
  res.status(404).json({ message: 'Message not found' });
  }
  } catch (err) {
  res.status(500).json({ message: err.message });
  }
  });
  


// POST a new a message
router.post('/', async (req, res) => {
  const contact = new Contact({

    name: req.body.name,
    email: req.body.email,
    mobile: req.body.mobile,
    subject: req.body.subject,
    message: req.body.message
  });

  try {
    const newContact = await contact.save();
  
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
  subject: 'Thanks for contacting us',
  text: `Dear ${req.body.name}, \n\nThank you for reaching us. Our technical team will get in touch with you soon. \n\n Best regards, \nHermes Aerospace Corporation`,
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
  
    res.status(201).json(newContact);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
  
});

// PUT (update) a message by ID
router.put('/:id', async (req, res) => {
  try {
    const contact  = await Contact.findById(req.params.id);
    if (contact) {
      contact.name = req.body.name || contact.name;
      contact.email = req.body.email || contact.email;
      contact.mobile = req.body.mobile || contact.mobile;
      contact.message = req.body.message || contact.message;
      contact.subject = req.body.subject || contact.subject;
      contact.reply = req.body.reply || contact.reply;

      const updatedContact = await contact.save();

  
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
          to: contact.email,
          subject: `RE | ${contact.subject}`,
          text: `Dear ${contact.name},\n\n${contact.reply}\n\n\nBest regards,\nHermes Aerospace Corporation`,
        };

        // Send email
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + info.response);
          }
        }),

      res.status(200).json(updatedContact);
    } else {
      res.status(404).json({ message: 'Message not found' });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


// DELETE an appointment by ID
router.delete('/:id', async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (contact) {
      await contact.remove();
      res.status(200).json({ message: 'Message deleted' });
    } else {
      res.status(404).json({ message: 'Message not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});



module.exports = router;
