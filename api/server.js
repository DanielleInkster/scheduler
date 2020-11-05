const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const Appointments = require("./Appointments");
const nodemailer = require("nodemailer");
const sendgridTransport = require("nodemailer-sendgrid-transport");
const path = require("path");
//

const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key: KEY,
    },
  })
);

mongoose.connect(
  `mongodb+srv://Danielle:{myKey}@cluster0.0gq9u.mongodb.net/appointments?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);

mongoose.connection.once("open", () => {
  console.log("Mongodb connection established successfully");
});

const PORT = 8081 || process.env.PORT;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../my-app/build")));

app.get("/", (req, res) => {
  Appointments.find((err, appt) => {
    if (err) {
      console.log(err);
    } else {
      res.json(appt);
    }
  });
});

app.get("/:date", (req, res) => {
  const day = req.params.date;
  Appointments.find({ date_id: `${day}` }, (err, appt) => {
    if (err) {
      console.log(err);
    } else {
      res.json(appt);
    }
  });
});

app.get("/:date/:time", (req, res) => {
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

app.put("/:date/:time", (req, res) => {
  const day = req.params.date;
  const time = req.params.time;
  Appointments.findOne(
    { date_id: `${day}`, time_id: `${time}` },
    (err, appt) => {
      if (!appt) {
        res.status(404).send("Appt not found");
      } else {
        appt.name = req.body.name;
        appt.project_name = req.body.project_name;
        appt.project_description = req.body.project_description;
        appt.email = req.body.email;
        appt.save().then(function (doc) {
          if (!doc) {
            next(new Error("Error while persisting!"));
          }
          res.status(201).json({
            appt: doc,
          });
        });
      }
    }
  );
});

app.post("/create", (req, res) => {
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

  const email = {
    from: "MyFakeBusinessAcct@gmail.com",
    to: req.body.email,
    subject: "Your Appointment Request with MyFakeBusiness",
    teXt: `You've requested an appointment with MyFakeBusiness. \n
                     Appointment Details:\n
                     Date: ${req.body.date}\n
                     Time: ${req.body.time}\n
                     Business Name: ${req.body.project_name}\n
                     Business Description: ${req.body.project_description}\n
                     You should receive a confirmation email within 24 hours. We look forward to working with you!\n
                     MyFakeBusiness Team`,
    html: `
                     <p>You've requested an appointment with MyFakeBusiness.</p>
                     <h4><u>Appointment Details:</u></h4>
                     <h5>Date: ${req.body.date}</h5>
                     <h5>Time: ${req.body.time}</h5>
                     <h5>Business Name: ${req.body.project_name}</h5>
                     <h5>Business Description: ${req.body.project_description}</h5>
                     <p>You should receive a confirmation email within 24 hours. We look forward to working with you!</p>
                     <p>MyFakeBusiness Team</p>
                     `,
  };

  appt
    .save()
    .then((appt) => {
      transporter.sendMail(email, function (err, info) {
        if (err) {
          console.log(error);
        } else {
          console.log("Message sent: " + info.response);
        }
      });
      res.json(appt);
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
});

app.delete("/delete/:date/:time", (req, res) => {
  const day = req.params.date;
  const time = req.params.time;
  Appointments.findOneAndDelete(
    { date_id: `${day}`, time_id: `${time}` },
    (err, records) => {
      if (err) {
        return res.status(400).json({ success: false, error: err });
      } else {
        return res.status(200).json({ success: true });
      }
    }
  );
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../my-app/build/index.html"));
});

app.listen(process.env.PORT || PORT, () => {
  console.log("Server is running on port " + PORT);
});
