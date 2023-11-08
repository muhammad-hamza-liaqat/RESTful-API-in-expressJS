const mongoose = require("mongoose");

let employeeSchema = new mongoose.Schema({
    name: {
        type:String
    },
    stack: {
        type:String
    },
    salary: {
        type:Number
    },
    type: {
        type: String
    }
})

module.exports = mongoose.model("Employee", employeeSchema);