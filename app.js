import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/userRouter.js";
import adminRouter from "./routes/adminRouter.js";

dotenv.config();
const app = express();

app.use("/user", express.json(), userRouter);
app.use("/admin", express.json(), adminRouter);

mongoose.connect(process.env.MONGO_CONNECTION_URL);

app.listen(process.env.PORT, () =>
    console.log("Listening on port", process.env.PORT),
);
