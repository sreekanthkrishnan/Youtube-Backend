import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
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

app.use("/api/v1/users", userRoute);
app.use("/api/v1/videos", videoRoute);
app.use("/api/v1/comments", commentRoute);

app.listen(8000, () => {
    connect();
    console.log("listening on 8000");
});
