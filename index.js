import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";

let app = express();

app.use(bodyParser.json());
let mongoUrl = "mongodb+srv://rpggamage:zh5AcuP43mBaKp6w@cluster0.dkiyv.mongodb.net/Product?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(mongoUrl);
let connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB database connection established successfully");
});

app.post("/", (req, res) => {


    console.log("That is a post request");
    res.send("You send me a post request");

    let studentSchema = new mongoose.Schema({
        name: String,
        age: Number,
        gender: String
    });
    let Student = mongoose.model("student", studentSchema);

    let newStudent = req.body;
    let student = new Student(newStudent);
    student.save().then
        (() => {
            console.log("Student saved successfully");
        }
        ).catch
        ((error) => {
            console.log("Error saving student: " + error);
        }
        );
})



app.get("/", (req, res) => {
    console.log("That is a get request");
    console.log(req);
    res.json({
        "message": "Good Morning " + req.body.name
    }
    );
}
);


app.delete("/", (req, res) => {
    console.log("That is a delete request");
    res.send("You send me a delete request");
})
app.put("/", (req, res) => {
    console.log("That is a put request");
    res.send("You send me a put request");
})
app.listen(3000, () => {
    console.log("Server is running on port 3000");
}
);

// console.log("Hello World");
