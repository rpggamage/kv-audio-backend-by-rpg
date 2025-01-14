import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    key: { type: String, required: true,unique: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    dimension: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true,required: true,default:"Uncategorized" },
    availability: { type: Boolean, required: true, default: true },
    Image: { type: [String], required: true, default: ["https://www.shutterstock.com/image-vector/avatar-gender-neutral-silhouette-vector-600nw-2470054311.jpg"] },
});

const Product = mongoose.model("Product", productSchema);

export default Product;