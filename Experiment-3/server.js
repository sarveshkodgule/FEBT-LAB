const express = require("express");
const mongoose = require("mongoose");
const Student = require("./models/Student");

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/studentdb")
    .then(() => console.log("MongoDB Connected Successfully"))
    .catch(err => console.log("MongoDB Connection Error: ", err));

app.get("/", (req, res) => {
    res.send("<h1>Welcome to MongoDB with Express.js by Sarvesh Kodgule</h1>");
});

app.get("/add", async (req, res) => {
    try {
        const student = new Student({
            name: "Sarvesh Kodgule",
            age: 21,
            course: "B.Tech (CSIT)"
        });
        await student.save();
        res.send("Student Record Added Successfully");
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get("/students", async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post("/students", async (req, res) => {
    try {
        const student = await Student.create(req.body);
        res.json(student);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.put("/students/:id", async (req, res) => {
    try {
        const student = await Student.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(student);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.delete("/students/:id", async (req, res) => {
    try {
        await Student.findByIdAndDelete(req.params.id);
        res.send("Student Deleted");
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Start Server
app.listen(3000, () => {
    console.log("Server Running at http://localhost:3000");
});
