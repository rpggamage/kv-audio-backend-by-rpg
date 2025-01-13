import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    date: { type: String, required: true, default: Date.now() },
    isApproved: { type: Boolean, required: true, default: false },
    profilePicture: { type: String, required: true, default: "https://www.shutterstock.com/image-vector/avatar-gender-neutral-silhouette-vector-600nw-2470054311.jpg" },
});

const Review = mongoose.model("Review", reviewSchema);

export default Review;