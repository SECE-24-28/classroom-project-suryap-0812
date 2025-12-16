const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
    name:{type:String, required:true}, 
    gender:{type:String, required:true }// user Schema attributes
})

module.exports = mongoose.model("User",userSchema)
