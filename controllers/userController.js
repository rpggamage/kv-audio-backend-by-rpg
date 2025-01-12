import User from "../models/user.js";
import bcrypt from "bcrypt";

export function registerUser(req, res) {

    const data = req.body;
    data.password = bcrypt.hashSync(data.password, 10);
    const newUser = new User(data);

    newUser.save()
        .then(() => {
            res.json({
                "message": "User save successfully"
            })
        })
        .catch((err) => {
            res.status(500).send(err);
        })


}
export function loginUser(req, res) {
    const data = req.body;
    User.findOne({ email: data.email })
        .then((user) => {
            if (!user) {
                res.status(400).json({ "message": "Invalid email " });
                return;
            } else {

                if (bcrypt.compareSync(data.password, user.password)) {
                    res.status(200).send(user);
                } else {
                    res.status(400).json({ "message": "Invalid password" });
                }
            }
        }).catch((err) => {
            res.status(400).send(err);
        })
}