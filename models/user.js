import e from "express";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true, default: "customer" },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    address: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    isActive: { type: Boolean, required: true, default: true },
    profilePicture: { type: String, required: true, default: "https://www.shutterstock.com/image-vector/avatar-gender-neutral-silhouette-vector-600nw-2470054311.jpg" },
});
const User = mongoose.model("User", userSchema);

export default User;