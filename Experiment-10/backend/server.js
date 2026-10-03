const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const students = [
  {
    id: 1,
    name: "Sarvesh Kodgule",
    branch: "Computer Science & Information Technology"
  },
  {
    id: 2,
    name: "Priya",
    branch: "Information Technology"
  },
  {
    id: 3,
    name: "Amit",
    branch: "Electronics"
  }
];

app.get("/students", (req, res) => {
  res.json(students);
});

app.listen(5000, () => {
  console.log("Backend server running at http://localhost:5000");
});
