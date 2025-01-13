# skyrekProjectByRPG
#Day 01
    npm init -y,
    npm install express,
    in package.json
        "type": "module",
        "start": "node index.js",
#Day 02
    postman installed,
    mongoDB DB created,
    npm install body-parser
    npm install nodemon
        "start": "nodemon index.js",
    npm install mongoose
Mongo DB : zh5AcuP43mBaKp6w
let mongoUrl = "mongodb+srv://rpggamage:zh5AcuP43mBaKp6w@cluster0.dkiyv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

establishe connection
schema ->init modle -> data -> add to model -Save
in mongo go to brows collection I saw data

let mongoUrl = "mongodb+srv://rpggamage:zh5AcuP43mBaKp6w@cluster0.dkiyv.mongodb.net/XXXXXXX?retryWrites=true&w=majority&appName=Cluster0"; XXXXXXX is the database name in the cluster
#Day 03
    Understand the folder structure of the backend
    models/controllers/routes

#Day 04
    npm i bcrypt
    register user,password encryption, login
#Day 05
    Authorization and authentication
    Json web token (JWT)
    npm i jsonwebtoken
    in postman ->Authorization -> Bearer Token -> add your token
    however to read the token fro backend we need a middleware (,,next)
    then need to implement Authorization on user.role

#Day 06
    we are going to learn env
    npm i dotenv
