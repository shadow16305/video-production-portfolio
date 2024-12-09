import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_TO,
    pass: process.env.EMAIL_APP_PASS,
  },
});

app.post("/api/send", (req, res) => {
  const { name, email, business_name, hear, message } = req.body;

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_TO,
    subject: `New email from ${name}`,
    text: `
        Name: ${name}
        Email: ${email}
        Business Name: ${business_name}
        Heard From: ${hear}
        Message: ${message}
      `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error);
    }
    res.status(200).send("Email sent successfully");
  });
});

const port = 3000;

app.listen(port, () => console.log(`Server running on port ${port}`));
