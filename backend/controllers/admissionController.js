const Admission = require("../models/admissionModel");

const submitAdmissionForm = async (req, res) => {
  try {
    // Assuming you have an Admission model
    const newAdmission = new Admission(req.body);
    await newAdmission.save();

    // Log the data to console (you can replace this with sending an email)
    console.log("Admission Form Submitted:", req.body);

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

module.exports = {
  submitAdmissionForm,
  getAllAdmissions,
};
