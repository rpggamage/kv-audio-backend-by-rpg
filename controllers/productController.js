import Product from "../models/product.js";
import { isItAdmin } from "./userController.js";

export function addProduct(req, res) {
    
    if (!req.user) {
        res.status(401).json({ message: "Unauthorized" });
        return;
    }
    if (req.user.role !== "admin") {
        res.status(401).json({ message: "Unauthorized" });
        return;
    }
    const data = req.body;
    const newProduct = new Product(data);
    newProduct.save()
        .then(() => {
            res.json({
                "message": "Product save successfully"
            })
        })
        .catch((err) => {
            res.json({
                "message": "Product cannot save"
            })
            res.status(500).send(err);
        })
}

export async function getProducts(req, res) {
    try {
        if(isItAdmin(req)){           
            
            const products = await Product.find({});
            res.json(products);
        }else{
            const products = await Product.find({availability:true});
            res.json(products);}
    } catch (err) {
        res.status(500).send(err);
    } 
}
export async function updateProduct(req, res) {
    try {
        if(isItAdmin(req)){

        const data = req.body;
        const key = req.params.key;
        await Product.updateOne({ key: key }, { $set: data });
        res.json({ message: "Product updated successfully" });

}else{
    res.status(401).json({ message: "Unauthorized" });
    return;
}
    }catch{
res.status(500).json({ message: "failed to update product" });
    }
}
export async function deleteProduct(req, res) {
    try {
        if(isItAdmin(req)){
        const key = req.params.key;
        await Product.deleteOne({ key: key });
        res.json({ message: "Product deleted successfully" });
}else{
    res.status(401).json({ message: "Unauthorized" });
    return;
}
    }catch{
res.status(500).json({ message: "failed to delete product" });
    }
}