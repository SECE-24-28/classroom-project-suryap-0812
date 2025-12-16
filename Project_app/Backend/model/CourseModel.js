const mongoose = require("mongoose")

// schema
const courseSchema = new mongoose.Schema({
    title: {type:String, required:true},
    duration:{type:String, required:true}//course schema atributes
})

// exports.module = mongoose.model("mycourse", courseSchema)

module.exports = mongoose.model("Course", courseSchema)