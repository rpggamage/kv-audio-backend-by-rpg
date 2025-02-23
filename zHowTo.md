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
let mongoUrl = "";

establishe connection
schema ->init modle -> data -> add to model -Save
in mongo go to brows collection I saw data
    npm i dotenv  
    now you should use env file
let mongoUrl = ""; XXXXXXX is the database name in the cluster
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
    npm i dotenv -> dotenv.config();->process.env.JWT_SECRET
    then we created review part 

    now
        reviewRouter.get("/:name", (req, res)=>{
            console.log(req.params.name);
        });
    then we deleted review by email as a parameter
    // THIS TYPE OF ROUTE IS CALLED PARAMETERIZED ROUTE SHOULD BE AT THE END
#Day 07
    Async programming
#Day 08
    completing product 
    isItAdmin() -> userController.js

    change the repo name rpggamage/kv-audio-backend-by-rpg
    make it public repo
    new name set in the local repo
    
#Day 12 for frontend api call using axios you need to install 
    npm install cors
        then in index.js
            import cors from "cors";

            dotenv.config();

            let app = express();

            app.use(cors());