import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/userRouter.js";
dotenv.config();
const app = express();

app.use("/user", userRouter);

mongoose.connect(process.env.MONGO_CONNECTION_URL);

app.listen(process.env.PORT, () =>
    console.log("Listening on port", process.env.PORT),
);
