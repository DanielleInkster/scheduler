const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const Appointments = require('./models/Appointments');

mongoose.connect('mongodb://127.0.0.1:27017/appointments', { useNewUrlParser: true });

mongoose.connection.once('open', () => {
  console.log('Mongodb connection established successfully');
});

const PORT = 4000;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  Appointments.find((err, appt) => {
    if (err) {
      console.log(err);
    } else {
      res.json(appt);
    }
  });
});

app.get('/:date', (req, res) => {
  const day = req.params.date;
  Appointments.find({ date_id: `${day}` }, (err, appt) => {
    if (err) {
      console.log(err);
    } else {
      res.json(appt);
    }
  });
});

app.get('/:date/:time', (req, res) => {
  const day = req.params.date;
  const time = req.params.time;
  Appointments.find({ date_id: `${day}`, time_id: `${time}` }, (err, appt) => {
    if (err) {
      console.log(err);
    } else {
      res.json(appt);
    }
  });
});

app.put('/:date/:time', (req, res) => {
  const day = req.params.date;
  const time = req.params.time;
  Appointments.find({ date_id: `${day}`, time_id: `${time}` }, (err, appt) => {
    if (!appt) {
      res.status(404).send('Appt not found');
    } else {
      appt[0].name = req.body.name;
      appt[0].project_name = req.body.project_name;
      appt[0].project_description = req.body.project_description;
      appt[0].email = req.body.email;
      appt[0].save().then(function (doc) {
        if (!doc) {
          next(new Error('Error while persisting!'));
        }
        res.status(201).json({
          appt: doc,
        });
      });
    }
  });
});

app.post('/create', (req, res) => {
  const appt = new Appointments({
    date_id: req.body.date_id,
    time_id: req.body.time_id,
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

app.delete('/delete/:date/:time', (req, res) => {
  const day = req.params.date;
  const time = req.params.time;
  Appointments.findOneAndDelete({ date_id: `${day}`, time_id: `${time}` }, (err, records) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    } else {
      return res.status(200).json({ success: true });
    }
  });
});

app.delete('/deleteAll', (req, res) => {
  Appointments.remove((err, records) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    } else {
      return res.status(200).json({ success: true });
    }
  });
});

app.listen(PORT, () => {
  console.log('Server is running on port ' + PORT);
});
