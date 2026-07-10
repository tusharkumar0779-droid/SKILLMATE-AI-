import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pkg from "pg";

dotenv.config();

const { Pool } = pkg;

const app = express();

app.use(cors());
app.use(express.json());

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.NODE_ENV === "production"
        ? { rejectUnauthorized: false }
        : false
});

// Home Route
app.get("/", (req, res) => {
    res.send("SkillMate AI Backend is Running 🚀");
});

// Save User Route
app.post("/api/users", async (req, res) => {

    console.log("Received data:", req.body);
    try {

        const { uid, email, password, type } = req.body;

        await pool.query(
            `INSERT INTO users(uid,email,password,type)
             VALUES($1,$2,$3,$4)`,
            [uid, email, password, type]
        );

        res.status(200).json({
            success: true,
            message: "User Saved Successfully"
        });

    } catch (err) {

        console.error(err);

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

});

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`);
});