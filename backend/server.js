import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoute from "./routes/api/userRoute.js";
import authRoute from "./routes/api/authRoute.js";
import profileRoute from "./routes/api/profileRoute.js";
import postsRoute from "./routes/api/postsRoute.js";

dotenv.config();

connectDB();

const app = express();

const PORT = process.env.PORT || 5000;

// all routes
app.get("/", (req, res) => res.send("API Running"));

//Define Routes
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/profile", profileRoute);
app.use("/api/posts", postsRoute);

app.listen(PORT, () => console.log(`server running at port ${PORT}`));
