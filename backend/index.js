const express = require("express");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const router = require("./router");
const cors = require("cors");
const DbConnect = require("./config/dbConfig");
const app = express();
app.use(
  cors({
    origin: ["http://localhost:5173","http://localhost:5174"],
    credentials: true,
  })
);
app.use(express.static("uploads"));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use(router);

DbConnect();

app.listen(process.env.SERVER_PORT, () => {
  console.log("server is running");
});
