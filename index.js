import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import userRouter from "./routes/userRouter.js";
import productRouter from "./routes/productRouter.js";
import jwt from "jsonwebtoken";

let app = express();

app.use(bodyParser.json());
app.use((req, res, next) => {
    let token = req.header("Authorization");


    if (token) {
        token = token.replace("Bearer ", "");
        jwt.verify(token, "kv-secret-82", (err, decoded) => {
            if (err) {
                res.status(401).send({ message: "Invalid token" });
            } else {

                req.user = decoded;

            }
        });
    }
    next();
});
let mongoUrl = "mongodb+srv://rpggamage:zh5AcuP43mBaKp6w@cluster0.dkiyv.mongodb.net/Product?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(mongoUrl);
let connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB database connection established successfully");
});

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
}
);


