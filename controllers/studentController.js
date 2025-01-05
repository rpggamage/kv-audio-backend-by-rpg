import Student from "../models/student.js";

export function getStudents(req, res) {
    Student.find().then((student) => {
        res.json({
            student
        })
    }).catch((err) => {
        res.send(err);
    })

}

export function postStudents(req, res) {
    let student = new Student(req.body);
    student.save().then(() => {
        res.json({
            "status": "success"
        })
    }).catch((err) => {
        res.send(err);
    })

}