import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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

                const isPasswordCorrect = bcrypt.compareSync(data.password, user.password);
                if (isPasswordCorrect) {
                    const token = jwt.sign(
                        { id: user.firstName, lastName: user.lastName, email: user.email, role: user.role },
                        process.env.JWT_SECRET,

                    )
                    res.json({ message: "Login successfully", token: token });
                } else {
                    res.status(400).json({ "message": "Invalid password" });
                }
            }
        }).catch((err) => {
            res.status(400).send(err);
        })
}