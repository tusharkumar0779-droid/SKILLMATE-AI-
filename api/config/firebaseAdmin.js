import admin from "firebase-admin";
import fs from "fs";

// Read Firebase Service Account Key
const serviceAccount = JSON.parse(
    fs.readFileSync("./config/serviceAccountKey.json", "utf8")
);

// Initialize Firebase Admin
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

// Export Admin
export default admin;