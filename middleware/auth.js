import admin from "../config/firebaseAdmin.js";

const authenticateUser = async (req, res, next) => {

    try {

        const token = req.headers.authorization?.split("Bearer ")[1];

        if (!token) {
            return res.status(401).json({
                success: false,
                message: "No token provided"
            });
        }

        const decodedToken = await admin.auth().verifyIdToken(token);

        req.user = decodedToken;

        next();

    } catch (error) {

        return res.status(401).json({
            success: false,
            message: "Unauthorized"
        });

    }

};

export default authenticateUser;
