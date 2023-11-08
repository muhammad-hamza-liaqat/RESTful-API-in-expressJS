const express = require("express");
const router = express.Router();
const employees = require("../Models/EmployeeSchema.js");
const app = express();

// making routes..
router.get("/", (req, res) => {
  res.end("Home page of the server!");
});

router.get("/getallusers", async (req, res) => {
  try {
    const user = await employees.find({});
    res.json(user);
  } catch (err) {
    console.log("error occured!", err);
  }
});
// get user by id
router.get("/finduser/:id", async (req,res)=>{
  console.log("user-id to find:",req.params.id)
  const user = await employees.findById(req.params.id)
  res.json(user)

})

router.get("/add", (req, res) => {
  res.render("form");
});

router.post("/adduser", async (req, res) => {
  try {
    const saveNew = await employees.create(req.body);
    res.json(saveNew);
  } catch (err) {
    console.log("error occurred!", err);
    res.status(500).json({ error: "Failed to add user" });
  }
});

module.exports = router;
