import e from "express";
import Inquiry from "../models/inquiry.js";    
import { isItAdmin, isItCustomer } from "./userController.js";    

export async function addInquiry(req, res) {
try {
    if (isItCustomer(req)) {
        const data = req.body;
        data.email = req.user.email;
        data.phone = req.user.phone;

        let id = 0;
        const inquiries = await Inquiry.find({}).sort({ id: -1 }).limit(1);
        if (inquiries.length > 0) {
            id = inquiries[0].id+1;
        }else{
            id = 1;

        }
        data.id = id;
        const newInquiry = new Inquiry(data);
        const response = await newInquiry.save();
        res.json({ message: "Inquiry save successfully" });
    }
        
}catch (err) {
    console.log(err);
    res.status(500).json({ message: "failed to add inquiry" });
}
}

export async function getInquiries(req, res) {
    try {
        if (isItCustomer(req)) {
            const inquiries = await Inquiry.find({email: req.user.email});
            res.json(inquiries);
        }else if(isItAdmin(req)){
            const inquiries = await Inquiry.find({});
            res.json(inquiries);
        }else{
            res.status(500).json({ message: "log an try again" });
        }
    } catch (err) {
        
        res.status(500).json({ message: "failed to get inquiries" });
    }
}
export async function deleteInquiry(req, res) {
    try {
        if (isItAdmin(req)) {
            const email = req.params.email;
            await Inquiry.deleteOne({ email: email });
            res.json({ message: "Inquiry deleted successfully" });
        }else{
            await Inquiry.deleteOne({ email: email === req.user.email });
            res.json({ message: "Your Inquiry deleted successfully" });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "failed to delete inquiry" });
    }
}