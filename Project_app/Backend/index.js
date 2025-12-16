const express = require("express")
const cors = require("cors")
const app = express()
const PORT = 5000
const mongoose = require("mongoose")
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/mycourse").then(() => {
    console.log("DB connected")
}).catch((error) => {
    console.log("connection error", error)
})

const Course = require("./model/CourseModel")
const User = require("./model/UserModel")


app.get("/api/courses", async (req, res) => {
    try{
    const courses = await Course.find()
    res.json(courses)
    }
    catch (er) {
    res.status(500).json({ error: "Failed to fetch courses" })
    }
})

app.post("/api/courses", async (req, res) => {
    try {
        const { title, duration } = req.body;

        const course = new Course({ title, duration })
        await course.save()

        res.status(201).json({ message: "Data created" })
    } catch (er) {
        res.status(500).json({ error: "Failed to create course" })
        console.log("Erooor:", er)
    }
})

//Get all users
app.get("/api/users", (req, res) => {
    User.find().then((users) => res.json(users));
})

//Get user by id
app.get("/api/users/:id", (req, res) => {
    const { id } = req.params;
    User.findById(id).then((user) => res.json(user));
})

//Create user
app.post("/api/users", (req, res) => {
    const { name, gender } = req.body;
    const user = new User({ name, gender });
    user.save().then(() => res.json({ message: "User created successfully" }));
})

//Update user
app.put("/api/users/:id", (req, res) => {
    const { id } = req.params;
    const { name, gender} = req.body;
    User.findByIdAndUpdate(id, { name, gender}).then(() => res.json({ message: "User updated successfully" }));
})

//Delete user
app.delete("/api/users/:id", (req, res) => {
    const { id } = req.params;
    User.findByIdAndDelete(id).then(() => res.json({ message: "User deleted successfully" }));
})



app.listen(PORT, () => {
    console.log("Server running")
})