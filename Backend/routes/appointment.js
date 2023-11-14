const express = require('express');
const Appointment = require('../models/Appointment');
const nodemailer = require('nodemailer');

const router = express.Router();

// GET all appointments
router.get('/', async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.status(200).json(appointments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// GET a specific appointment by token
router.get('/:token', async (req, res) => {
  try {
  const appointment = await Appointment.findOne({ token: req.params.token });
  if (appointment) {
  res.status(200).json(appointment);
  } else {
  res.status(404).json({ message: 'Appointment not found' });
  }
  } catch (err) {
  res.status(500).json({ message: err.message });
  }
  });
  


// POST a new appointment
router.post('/', async (req, res) => {
  const appointment = new Appointment({
    token: ticket, // You'll need to define this function
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    companyName: req.body.companyName,
    email: req.body.email,
    mobile: req.body.mobile,
    isExistingCustomer: req.body.isExistingCustomer,
    projectDescription: req.body.projectDescription,
    appointmentDate: req.body.appointmentDate,
    appointmentStart: req.body.appointmentStart,
    appointmentEnd: req.body.appointmentEnd,
  });

  try {
    const newAppointment = await appointment.save();
  
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
  subject: 'New Appointment Confirmation',
  text: `Dear ${req.body.firstName} ${req.body.lastName}, \n\nThank you for scheduling an appointment with us. We look forward to seeing you soon! \n\n Your Token Number is ${ticket}  \n\n Use this token to track the status of your request, you will be notified with the time and date of meeting as soon as your request reaches one of our executives. \n\n Best regards, \nHermes Aerospace Corporation`,
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
  
    res.status(201).json(newAppointment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
  
});

// PUT (update) an appointment by ID
// PUT (update) an appointment by ID
router.put('/:id', async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id);
    if (appointment) {
      appointment.firstName = req.body.firstName || appointment.firstName;
      appointment.lastName = req.body.lastName || appointment.lastName;
      appointment.companyName = req.body.companyName || appointment.companyName;
      appointment.email = req.body.email || appointment.email;
      appointment.mobile = req.body.mobile || appointment.mobile;
      appointment.projectDescription = req.body.projectDescription || appointment.projectDescription;
      appointment.isExistingCustomer = req.body.isExistingCustomer || appointment.isExistingCustomer;
      appointment.appointmentDate = req.body.appointmentDate || appointment.appointmentDate;
      appointment.appointmentStart = req.body.appointmentStart || appointment.appointmentStart;
      appointment.appointmentEnd = req.body.appointmentEnd || appointment.appointmentEnd;
      appointment.meetingLink = req.body.meetingLink || appointment.meetingLink;

      const prevStatus = appointment.status;
      appointment.status = req.body.status || appointment.status;

      const updatedAppointment = await appointment.save();

      // Check if the appointment status is changed to "accepted"
      if (prevStatus !== 'accepted' && appointment.status === 'accepted') {
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
          to: appointment.email,
          subject: 'Appointment Confirmation',
          text: `Dear ${appointment.firstName} ${appointment.lastName},\n\nWe are delighted to inform you that your request for an appointment has been accepted. We have reserved a time slot for you to meet with our executive team on ${appointment.appointmentDate} at ${appointment.appointmentStart} - ${appointment.appointmentEnd}.\n\nWe are thrilled to have the opportunity to discuss your project and explore potential avenues for collaboration. Please come prepared with any questions you may have, and we will do our best to provide you with all the information you need.\n\nWe are confident that you will find your visit informative and valuable. Our team is eagerly looking forward to meeting with you and exploring the possibilities for collaboration.\n\nIf you have any questions or concerns, please do not hesitate to contact us. We are always available to assist you in any way we can. ${appointment.meetingLink ? `\n\nMeeting Link: ${appointment.meetingLink}` : "" }\n\n\nBest regards,\nHermes Aerospace Corporation`,
        };

        // Send email
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + info.response);
          }
        });
      }


           // Check if the appointment status is changed to "declined"
           if (prevStatus !== 'declined' && appointment.status === 'declined') {
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
              to: appointment.email,
              subject: 'Appointment Declined',
              text: `Dear ${appointment.firstName} ${appointment.lastName},\n\nWe are sorry to inform you that your request for an appointment has been declined. Our Executive team is working on clearing the backlog right now.\n\n\nBest regards,\nHermes Aerospace Corporation`,
            };
    
            // Send email
            transporter.sendMail(mailOptions, (error, info) => {
              if (error) {
                console.log(error);
              } else {
                console.log('Email sent: ' + info.response);
              }
            });
          }


           // Check if the appointment status is changed to "completed"
           if (prevStatus !== 'completed' && appointment.status === 'completed') {
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
              to: appointment.email,
              subject: 'Thank you for your appointment with us!',
              text: `Dear ${appointment.firstName} ${appointment.lastName},\n\nI wanted to take a moment to thank you for scheduling an appointment with us. It was a pleasure meeting with you and addressing your needs.\n\nIf you have any further questions or concerns, please don't hesitate to reach out to us. We're always here to help and ensure that our customers are fully satisfied.\n\nOnce again, thank you for choosing us for your needs. We look forward to serving you again in the future.\n\n\nBest regards,\nHermes Aerospace Corporation`,
            };
    
            // Send email
            transporter.sendMail(mailOptions, (error, info) => {
              if (error) {
                console.log(error);
              } else {
                console.log('Email sent: ' + info.response);
              }
            });
          }



      res.status(200).json(updatedAppointment);
    } else {
      res.status(404).json({ message: 'Appointment not found' });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


// DELETE an appointment by ID
router.delete('/:id', async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id);
    if (appointment) {
      await appointment.remove();
      res.status(200).json({ message: 'Appointment deleted' });
    } else {
      res.status(404).json({ message: 'Appointment not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

const ticket = generateToken();

// Generate a unique token for each appointment
function generateToken () {
  const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let token = '';
  for (let i = 0; i < 8; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    token += chars[randomIndex];
  }
  return token;
}


module.exports = router;
