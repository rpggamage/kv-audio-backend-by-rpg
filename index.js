import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import userRouter from "./routes/userRouter.js";

let app = express();

app.use(bodyParser.json());
let mongoUrl = "mongodb+srv://rpggamage:zh5AcuP43mBaKp6w@cluster0.dkiyv.mongodb.net/Product?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(mongoUrl);
let connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB database connection established successfully");
});

app.use("/api/users", userRouter);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
}
);


