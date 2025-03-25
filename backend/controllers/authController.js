const sendEmail = require("../helpers/sendEmail");
const EmailValidateCheck = require("../helpers/ValidateEmail");
const userModel = require("../model/userModel");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const otp = require("otp-generator-simple");

async function registrationController(req, res) {
  let { name, email, password, role } = req.body;

  if (!email || !name || !password) {
    return res.status(404).send({
      error: "All fields are required",
    });
  }

  if (!EmailValidateCheck(email)) {
    return res.send({ error: "Invalid email" });
  }

  let existingUser = await userModel.findOne({ email });
  if (existingUser) {
    return res.status(404).send({
      error: "Email already in use",
    });
  }

  bcrypt.hash(password, 10, async function (err, hash) {
    if (err || !hash) {
      return res.status(500).send({ error: "Password encryption failed" });
    }

    try {
      let user = new userModel({
        name,
        email,
        password: hash,
        role,
      });

      await user.save();
      setTimeout(async () => {
        let otpsend = await userModel.findOneAndUpdate(
          { email },
          { $set: { otp: null } },
          { new: true }
        );
      }, 10000);

      sendEmail(email);
      res.send(user);
    } catch (error) {
      res.status(500).send({ error: "Internal Server Error" });
    }
  });
}

async function loginController(req, res) {
  let { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send({ error: "Email and password are required" });
  }

  let existingUser = await userModel.findOne({ email });
  if (!existingUser) {
    return res.status(401).send({ error: "Invalid email or password" });
  }

  bcrypt.compare(password, existingUser.password, async function (err, result) {
    if (err) {
      return res.status(500).send({ error: "Error verifying password" });
    }

    if (result) {
      if (existingUser.role == "user") {
        let userInfo = {
          id: existingUser._id,
          name: existingUser.name,
          email: existingUser.email,
          role: existingUser.role,
        };
        const token = jwt.sign({ userInfo }, process.env.jwt_secret, {
          expiresIn: "12h",
        });

        res.cookie("token", token, {
          // httpOnly: true,
          secure: false,
        });

        return res.status(200).send({
          success: "User login successful",
          data: existingUser,
          token,
        });
      } else if (existingUser.role == "admin") {
        let userInfo = {
          id: existingUser._id,
          name: existingUser.name,
          email: existingUser.email,
          role: existingUser.role,
        };
        const token = jwt.sign({ userInfo }, process.env.jwt_secret, {
          expiresIn: "2h",
        });

        res.cookie("token", token, {
          // httpOnly: true,
          secure: false,
        });

        return res.status(200).send({
          success: "Admin login successful",
          data: existingUser,
          token,
        });
      }
    } else {
      return res.status(401).send({ error: "Invalid email or password" });
    }
  });
}

// http://localhost:5000/api/v1/auth/otp-verify
async function OtpVerifyController(req, res) {
  const { email, otp } = req.body;
  // res.send({ email, otp });
  const existingUser = await userModel.findOne({ email });
  if (existingUser) {
    if (existingUser.otp == otp) {
      existingUser.isVerify = true;
      await existingUser.save();
      return res.status(200).send({ success: true, msg: "OTP Verified" });
    } else {
      return res.status(404).send({ success: false, msg: "OTP Invalied" });
    }
  } else {
    return res.status(404).send({ success: false, msg: "user not found" });
  }
}

// http://localhost:5000/api/v1/auth/resend-otp
async function ResendOtpController(req, res) {
  const { email } = req.body;
  const existingUser = await userModel.findOne({ email });
  if (existingUser) {
    let resend_otp = otp(6);
    existingUser.otp = resend_otp;
    await existingUser.save();
    setTimeout(async () => {
      existingUser.otp = null;
      await existingUser.save();
    }, 10000);
    sendEmail(email, resend_otp);
    return res
      .status(200)
      .send({ success: true, msg: "OTP Re-send Successful" });
  } else {
    return res.status(404).send({ success: false, msg: "user not found" });
  }
}

const totalUsersController = async (req, res) => {
  try {
    const totalUsers = await userModel.countDocuments();
    res.status(200).json({ success: true, totalUsers });
  } catch (err) {
    res.status(500).json({ success: false, msg: err.message || err });
  }
};

module.exports = {
  registrationController,
  loginController,
  OtpVerifyController,
  ResendOtpController,
  totalUsersController,
};
