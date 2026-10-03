const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
app.use(express.json());

const SECRET_KEY = "jwtsecret";

// Login Route
app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if ((username === "admin" || username === "sarvesh") && (password === "12345" || password === "sarvesh123")) {
        const token = jwt.sign(
            { username: username },
            SECRET_KEY,
            { expiresIn: "1h" }
        );
        res.json({
            message: "Login Successful",
            token: token
        });
    } else {
        res.status(401).json({
            message: "Invalid Credentials"
        });
    }
});

// Authentication Middleware
function verifyToken(req, res, next) {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(403).json({
            message: "Access Denied"
        });
    }
    try {
        jwt.verify(token, SECRET_KEY);
        next();
    } catch {
        res.status(401).json({
            message: "Invalid Token"
        });
    }
}

// Protected Route
app.get("/profile", verifyToken, (req, res) => {
    res.json({
        message: "Welcome to Protected Profile Page - Sarvesh Kodgule"
    });
});

// Start Server
app.listen(3000, () => {
    console.log("Server running on Port 3000");
});
