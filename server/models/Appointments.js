const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Appointment = new Schema(
  {
    date_id: { type: String, required: true },
    time_id: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    name: { type: String, required: true },
    project_name: { type: String, required: false },
    project_description: { type: String, required: true },
    email: { type: String, required: true },
  },
  { timestamps: true },
);

module.exports = mongoose.model('appointments', Appointment);
