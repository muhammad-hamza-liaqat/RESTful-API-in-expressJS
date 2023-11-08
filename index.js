const express = require("express");
const app = express();
const userRoute = require("./Routes/userRoute");
const mongoose = require("mongoose");
app.use(express.json());
app.use("/", userRoute);
// connecting the database with developers folder
mongoose
  .connect("mongodb://localhost:27017/developersStudioDB")
  .then(() => {
    console.log("database connected");
  })
  .catch((e) => {
    console.log("database not connected", e);
  });

app.listen(3000, () => {
  console.log("server running on port 3000");
});

// forms via template
app.set('view engine', 'ejs');
app.set('views',"./views");