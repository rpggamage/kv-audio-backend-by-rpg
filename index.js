import express from "express";

let app = express();

app.get("/", (req, res) => {
    console.log("That is a get request");
    res.send("You send me a get request");
}
);
app.post("/", (req, res) => {
    console.log("That is a post request");
    res.send("You send me a post request");
})

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
