const jwt = require("jsonwebtoken");

function authMiddleware(req, res, Next) {
  let { token } = req.cookies;
  if (token) {
    jwt.verify(token, process.env.jwt_secret, function (err, decoded) {
      if (err) {
        return res.status(400).send({ success: true, msg: err.message });
      } else {
        let { role } = decoded.userInfo;
        if (role == "admin") {
          Next();
        } else {
          return res.status(401).send({ success: false, msg: "access denied" });
        }
      }
    });
  } else {
    return res.status(404).send({ success: false, msg: "Token is not found" });
  }
}

module.exports = { authMiddleware };
