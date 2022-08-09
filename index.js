import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
// importing routes
import authRoute from "./routes/auth.js";
import userRoute from "./routes/users.js";
import videoRoute from "./routes/videos.js";
import commentRoute from "./routes/comments.js";

dotenv.config();

const app = express();

const connect = () => {
    mongoose
        .connect(process.env.MONGO)
        .then(() => {
            console.log("DB connection established");
        })
        .catch((err) => {
            throw err;
            console.log(err);
        });
};

// ROUTES SETUP FUN

app.use(cookieParser());
app.use(express.json());
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/videos", videoRoute);
app.use("/api/v1/comments", commentRoute);

app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Someting went wrong";
    return res.status(status).json({
        StatusCode: 6001,
        message,
    });
});

app.listen(8000, () => {
    connect();
    console.log("listening on 8000");
});
