const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const router = express.Router();

const app = express();
app.use(cors());

app.use(express.json());
app.use("/", router);
app.listen(3002, () => console.log("Server running"));

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "alloolorunfemi@gmail.com",
    pass: "vjoiwtxcgmwknzhl",
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const invitee = req.body.invitee;
  const location = req.body.location;
  const whatsappNumber = req.body.whatsappNumber;
  const message = req.body.message;
  const mail = {
    from: name,
    to: "alloolorunfemi@gmail.com",
    subject: `${name} just registered!`,
    html: `
            <p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Invitee: ${invitee}</p>
            <p>location: ${location}</p>
            <p>whatsappNumber: ${whatsappNumber}</p>
            <p>MessageP: ${message}</p>
        `,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Message Sent" });
    }
  });
});

router.post("/playlist", (req, res) => {
  const name = req.body.name;
  const prayerRequest = req.body.prayerRequest;
  const mail = {
    from: name,
    to: "alloolorunfemi@gmail.com",
    subject: `${name} sent a prayer request`,
    html: `
            <p>My name is ${name} </p>
            <p>Prayer request: ${prayerRequest}</p>
        `,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      console.error(error);
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Message Sent" });
    }
  });
});
