const nodemailer = require("nodemailer");

async function sendEmail(email, otp) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.auth_email,
      pass: process.env.auth_pass,
    },
  });
  const info = await transporter.sendMail({
    from: process.env.auth_email, // sender address
    to: email, // list of receivers
    subject: "Registration OTP", // Subject line
    html: `<div><img alt=""src="https://as2.ftcdn.net/jpg/01/09/65/39/1000_F_109653972_1IysHmwEMaJAn5Nw0Kos18p8cro0VwXM.jpg"><h3>Your One-time password ${otp}</h3><p>The OTP is valid for 2 minutes after being issued. Please enter the above OTP on the career Sign-In screen to proceed.</p></div>`,
  });
}

module.exports = sendEmail;
