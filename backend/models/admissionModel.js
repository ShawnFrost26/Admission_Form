const mongoose = require("mongoose");

const admissionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  mobile: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  courses: { type: String, required: true },
  additionalInfo: { type: String },
});

const Admission = mongoose.model("Admission", admissionSchema);

module.exports = Admission;
