import pool from "../config/db.js";

// Register User
export const registerUser = async (req, res) => {
    try {

        const { uid, email, password, type } = req.body;

        const result = await pool.query(
            `INSERT INTO users (uid, email, password, type)
             VALUES ($1,$2,$3,$4)
             RETURNING *`,
            [uid, email, password, type]
        );

        res.status(201).json({
            success: true,
            message: "User Registered Successfully",
            user: result.rows[0]
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

// Get All Users
export const getUsers = async (req, res) => {

    try {

        const result = await pool.query(
            "SELECT * FROM users ORDER BY id DESC"
        );

        res.json(result.rows);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};