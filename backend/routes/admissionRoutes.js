const express = require("express");
const router = express.Router();
const admissionController = require("../controllers/admissionController");

// Define routes
router.post("/admission", admissionController.submitAdmissionForm);
router.get("/admissions", admissionController.getAllAdmissions);

module.exports = router;
