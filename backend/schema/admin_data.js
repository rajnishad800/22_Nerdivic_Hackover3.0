const mongoose = require("mongoose");
const userData = new mongoose.Schema({
    event:{
        type: String,
        required:true
    },
    organisers:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("Admin_data",userData);