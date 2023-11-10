const express = require("express");
const PORT = process.env.PORT || '3000'; //env file

const app = express();
const userRoute = require("./Routes/userRoute");
const mongoose = require("mongoose");
app.use(express.json()); // middleware for api
app.use(express.urlencoded())
app.use("/", userRoute);
// connecting the database with developers folder
mongoose
  .connect("mongodb://localhost:27017/developersStudioDB")
  .then(() => {
    console.log("database connected");
  })
  .catch((e) => {
    console.log("database not connected, error:", e);
  });

app.listen(3000, () => {
  console.log(`server started at http://localhost:${PORT}`);
});

// forms via template
app.set('view engine', 'pug');
app.set('views',"./views");