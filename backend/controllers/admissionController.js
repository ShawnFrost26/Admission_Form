const nodemailer = require("nodemailer");
const Admission = require("../models/admissionModel");
require("dotenv").config();
// console.log("maillllllllllll", process.env.EMAIL_USER);
const submitAdmissionForm = async (req, res) => {
  try {
    // Assuming you have an Admission model
    const newAdmission = new Admission(req.body);
    await newAdmission.save();

    // Log the data to console (you can replace this with sending an email)
    console.log("Admission Form Submitted:", req.body);

    // Send email
    await sendEmail(req.body);

    res.status(201).json({ message: "Admission form submitted successfully" });
  } catch (error) {
    console.error("Error submitting admission form:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getAllAdmissions = async (req, res) => {
  try {
    const admissions = await Admission.find();
    res.status(200).json(admissions);
  } catch (error) {
    console.error("Error fetching admissions:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Function to send email
const sendEmail = async (formData) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      // user: "professor2602@gmail.com",
      pass: process.env.EMAIL_PASSWORD,
      // pass: "khej ikiv ycoy exkw",
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    // from: "professor2602@gmail.com",
    to: process.env.TO_EMAIL,
    // to: "professor2602@gmail.com",
    subject: "New Admission Form Submission",
    text: `New Admission Form Submission\n\n${JSON.stringify(
      formData,
      null,
      2
    )}`,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = {
  submitAdmissionForm,
  getAllAdmissions,
};
