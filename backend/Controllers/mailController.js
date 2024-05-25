const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.HOST,
  port: process.env.MAIL_PORT,
  secure: false,
  requireTLS: true,
  auth: {
    user: process.env.USER,
    pass: process.env.PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

const sendEmail = async (name, email, id) => {
  try {
    const mailOptions = {
      from: process.env.USER,
      to: email,
      subject: "Thank You for Creating Account",
      html: `<p>Hi ${name},<br> We are thrilled to welcome you to our community! Thank you for creating an account with us. Your registration is successful, and you are now part of our platform.<br><h1  style="color: green;">Great Wishes from AapniSabzi</h1></p>`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email has been sent:", info.response);
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("An error occurred while sending the email");
  }
};

const sendOtp = async (name, email, otp) => {
  try {
    const mailOptions = {
      from: process.env.USER,
      to: email,
      subject: "OTP for Password Reset",
      html: `<p>Hello ${name},</p><p>Your OTP for password reset is: <strong>${otp}</strong></p> `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("OTP Email has been sent:", info.response);
  } catch (error) {
    console.error("Error sending OTP email:", error);
    throw new Error("An error occurred while sending the OTP email");
  }
};


const sendEmail1 = async (name, email, id,password) => {
  try {
    const mailOptions = {
      from: process.env.USER,
      to: email,
      subject: `Welcome Vendor`,
      html: `<p>Hi ${name},<br> We are thrilled to welcome you to our community! Here is your credentials to login as a vendor on our platform.<br>
      Please forget the default password and add new password.<br/>
      <h2>Email:${email},<br/> Password: ${password}</h2>
      <h1  style="color: green;">Great Wishes from AapniSabzi</h1></p>`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email has been sent:", info.response);
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("An error occurred while sending the email");
  }
};

module.exports = { sendOtp, sendEmail,sendEmail1 };
