import Product from "../models/product.js";

export function addProduct(req, res) {
    console.log(req.user);

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

