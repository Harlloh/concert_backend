// const express = require("express");
// const nodemailer = require("nodemailer");
// const cors = require("cors");
// const router = express.Router();
// require("dotenv").config(); 

// const app = express();
// app.use(cors());

// app.use(express.json());
// app.use("/", router);
// app.listen(3002, () => console.log("Server running"));

// const contactEmail = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: "asherpraiseconcert@gmail.com",
//     pass: "vjoiwtxcgmwknzhl",
//     // user: process.env.VAR_USERNAME,
//     // pass: process.env.VAR_PASSWORD,
//   },
// });

// const sendEmail = (to, subject, html) => {
//   const mail = {
//     from: "Asher praise concert",
//     to,
//     subject,
//     html,
//   };

// };
// contactEmail.sendMail(mail, (error) => {
//   if (error) {
//     console.error(error);
//   } else {
//     console.log("Email sent successfully");
//   }
// });

// contactEmail.verify((error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Ready to Send");
//   }
// });

// router.post("/", (req, res) => {
//   const name = req.body.name;
//   const email = req.body.email;
//   const invitee = req.body.invitee;
//   const location = req.body.location;
//   const whatsappNumber = req.body.whatsappNumber;
//   const message = req.body.message;
//   const mail = {
//     from: name,
//     to: "asherpraiseconcert@gmail.com",
//     subject: `${name} just registered!`,
//     html: `
//             <p>Name: ${name}</p>
//             <p>Email: ${email}</p>
//             <p>Invitee: ${invitee}</p>
//             <p>location: ${location}</p>
//             <p>whatsappNumber: ${whatsappNumber}</p>
//             <p>MessageP: ${message}</p>
//         `,
//   };
//   contactEmail.sendMail(mail, (error) => {
//     if (error) {
//       res.json({ status: "ERROR" });
//     } else {
//       res.json({ status: "Message Sent" });
//     }
//   });


//    const welcomeSubject = "Welcome to Asher praise concert!";
//    const welcomeHtml = `
//     <p>Dear ${name},</p>
//     <p>Thank you for registering for the asher praise concert </p>
//     <p>We are excited to have you on board.</p>
//     <p>Best regards,<br/>Asher praise concert Team</p>
//   `;
//    sendEmail(email, welcomeSubject, welcomeHtml);

//    res.json({ status: "Registration Successful" });
// });

// router.post("/playlist", (req, res) => {
//   const name = req.body.name;
//   const prayerRequest = req.body.prayerRequest;
//   const mail = {
//     from: name,
//     to: "asherpraiseconcert@gmail.com",
//     subject: `${name} sent a prayer request`,
//     html: `
//             <p>My name is ${name} </p>
//             <p>Prayer request: ${prayerRequest}</p>
//         `,
//   };
//   contactEmail.sendMail(mail, (error) => {
//     if (error) {
//       console.error(error);
//       res.json({ status: "ERROR" });
//     } else {
//       res.json({ status: "Message Sent" });
//     }
//   });


//   const confirmationSubject = "Prayer Request Received";
//   const confirmationHtml = `
//     <p>Dear ${name},</p>
//     <p>Thank you for submitting your prayer request. Our team will pray for you.</p>
//     <p>Best regards,<br/>Asher praise concert team Team</p>
//   `;
//   sendEmail(email, confirmationSubject, confirmationHtml);

//   res.json({ status: "Prayer Request Received" });
// });











const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const router = express.Router();
require("dotenv").config(); 

const app = express();
app.use(cors());

app.use(express.json());
app.use("/", router);
app.listen(3002, () => console.log("Server running"));

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "asherpraiseconcert@gmail.com",
    pass: "kjwrjuphfcerufim",
    // user: process.env.VAR_USERNAME,
    // pass: process.env.VAR_PASSWORD,
  },
});


// Function to send emails
const sendEmail = (to, subject, html) => {
  const mail = {
    from: "Asher praise concert",
    to,
    subject,
    html,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      console.error(error);
    } else {
      console.log("Email sent successfully");
    }
  });
};

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
    to: "asherpraiseconcert@gmail.com",
    subject: `${name} just registered!`,
    html: `
            <p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Invitee: ${invitee}</p>
            <p>location: ${location}</p>
            <p>whatsappNumber: ${whatsappNumber}</p>
            <p>Message: ${message}</p>
        `,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      // Send welcome email
      const welcomeSubject = "Welcome to an era of Asher praise!";
      const welcomeHtml = `
        <p>Dear ${name},</p>
        <p>Thank you for registering for the asher praise concert </p>
        <p>We are excited to have you on board.</p>
        <p>Best regards,<br/>Asher praise concert Team</p>
      `;
      sendEmail(email, welcomeSubject, welcomeHtml);

      res.json({ status: "Message Sent" });
    }
  });
});

router.post("/playlist", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const prayerRequest = req.body.prayerRequest;
  const mail = {
    from: name,
    to: "asherpraiseconcert@gmail.com",
    subject: `${name} sent a prayer request`,
    html: `
            <p>My name is ${name} </p>
            <p>Prayer request: ${prayerRequest}</p>
        `,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      // Send confirmation email for prayer request
      const confirmationSubject = "Prayer Request Received";
      const confirmationHtml = `
        <p>Dear ${name},</p>
        <p>Thank you for submitting your prayer request. Our team will pray for you.</p>
        <p>Best regards,<br/>Asher praise concert team Team</p>
      `;
      sendEmail(email, confirmationSubject, confirmationHtml);

      res.json({ status: "Message Sent" });
    }
  });
});
