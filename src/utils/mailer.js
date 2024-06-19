// configurar nodemailer para enviar correos con mi cuenta de gmail
const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  host: "lotoeureka.com",
  port: 465,
  secure: true,
  auth: {
    user: "no-reply@lotoeureka.com",
    pass: process.env.G_PASSWORD,
  },
  tls: {
    // do not fail on invalid certs
    rejectUnauthorized: false,
  },
});

module.exports = transporter;
