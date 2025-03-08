const { default: mongoose } = require("mongoose");

function DbConnect() {
  mongoose
    .connect(process.env.DB_URL)
    .then(() => {
      console.log("DataBase is running");
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = DbConnect;
