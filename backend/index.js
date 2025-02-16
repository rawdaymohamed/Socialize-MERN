import express from "express";
import dotenv from "dotenv"
import { connectDB } from "./db/connectDB.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.get("/", (req, res) => {
    res.json({ message: "Socialize MERN" })
})
app.listen(PORT, () => {
    connectDB()
    console.log("Listening on port", PORT)
})