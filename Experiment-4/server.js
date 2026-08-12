const express = require("express");
const app = express();
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
    res.send("REST API Server Running - Sarvesh Kodgule");
});

// GET API - Read Data
app.get("/students", (req, res) => {
    const students = [
        {
            id: 1,
            name: "Sarvesh Kodgule",
            branch: "CSIT"
        },
        {
            id: 2,
            name: "Amit",
            branch: "Information Technology"
        }
    ];
    res.json(students);
});

// POST API - Create Data
app.post("/students", (req, res) => {
    const student = req.body;
    res.json({
        message: "Student Added Successfully",
        data: student
    });
});

// PUT API - Update Data
app.put("/students/:id", (req, res) => {
    const id = req.params.id;
    res.json({
        message: "Student Updated Successfully",
        studentId: id,
        updatedData: req.body
    });
});

// DELETE API - Delete Data
app.delete("/students/:id", (req, res) => {
    const id = req.params.id;
    res.json({
        message: "Student Deleted Successfully",
        studentId: id
    });
});

// Start Server
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
