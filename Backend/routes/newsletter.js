const express = require('express');
const { Newsletter, Email } = require("../models/newsletter");
const nodemailer = require('nodemailer');

const router = express.Router();



// GET all emails
router.get('/subscribe', async (req, res) => {
  try {
    const emails = await Email.find();
    res.status(200).json(emails);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET all emails
router.get('/', async (req, res) => {
  try {
    const newsletters = await Newsletter.find();
    res.status(200).json(newsletters);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});



// Subscribe to newsletter
router.post('/subscribe', async (req, res) => {
  try {
    // Check if the email already exists in the Email schema
    const existingEmail = await Email.findOne({ email: req.body.email });
    if (existingEmail) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    // Create a new email and save it to the Email schema
    const email = new Email({
      email: req.body.email
    });
    const newEmail = await email.save();

    // Send a confirmation email to the subscriber
    const transporter = nodemailer.createTransport({
      host: 'email-smtp.us-east-1.amazonaws.com',
      port: 587,
      secure: false,
      auth: {
        user: 'AKIAWGYYQUSDD2M77SWD',
        pass: 'BOLMlE7AUuCXWe9S4Iv55feseBNHuU+fG/OiLkmUgKG+'
      },
    });
    const mailOptions = {
      from: 'Hermes Aerospace Corporation <hermesaero007@gmail.com>',
      to: req.body.email,
      subject: 'Thanks for subscribing to our Newsletter',
      text: `Dear Subscriber,\n\nWe hope this message finds you well. We wanted to take a moment to thank you for subscribing to our website newsletter and for your continued support of our content.\nAs a subscriber, you are among the first to receive our latest updates, exclusive offers, and informative articles on a variety of topics. We are constantly striving to improve our newsletter, and we value your feedback and suggestions.\nIn the coming weeks, we have some exciting new content and features planned that we think you'll love. Be sure to keep an eye on your inbox for our upcoming newsletters.\n\nThank you again for being a part of our community. We appreciate your continued interest in our website and look forward to providing you with valuable content in the future.\n\nBest regards,\nHemes Aerospace Corporation Team`,
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });

    res.status(201).json(newEmail);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


// POST a new newsletter
router.post('/', async (req, res) => {
  const newsletter = new Newsletter({
    subject: req.body.subject,
    message: req.body.message,
  });

  try {
    const newNewsletter = await newsletter.save();
    
    // Retrieve all email addresses
    const emailList = await Email.find({}, 'email');

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
      to: emailList.map(email => email.email).join(', '),
      subject: req.body.subject,
      html: req.body.message
    };


    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });

    res.status(201).json(newNewsletter);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
