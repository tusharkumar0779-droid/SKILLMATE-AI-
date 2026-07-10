import pool from "../config/db.js";

export const createUser = async (uid, email, password, type) => {

    const query = `
        INSERT INTO users(uid,email,password,type)
        VALUES($1,$2,$3,$4)
        RETURNING *;
    `;

    const values = [uid, email, password, type];

    const result = await pool.query(query, values);

    return result.rows[0];

};

export const getAllUsers = async () => {

    const result = await pool.query(
        "SELECT * FROM users ORDER BY id DESC"
    );

    return result.rows;

};