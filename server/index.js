const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('./db');
const Appointment = require('./models/Appointments');

const app = express();
const apiPort = 4000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(bodyParser.json());

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/', (req, res) => {
  Appointment.find((err, appt) => {
    if (err) {
      console.log(err);
    } else {
      res.json(appt);
    }
  });
});

app.post('/create', (req, res) => {
  const appt = new Appointment({
    date: req.body.date,
    time: req.body.time,
    name: req.body.name,
    project_name: req.body.project_name,
    project_description: req.body.project_description,
    email: req.body.email,
  });

  appt
    .save()
    .then((appt) => {
      res.json(appt);
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
});

app.delete('/deleteAll', (req, res) => {
  db.remove((err, records) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    } else {
      return res.status(200).json({ success: true });
    }
  });
});

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
