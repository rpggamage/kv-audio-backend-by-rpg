import Review from "../models/review.js";

export function addReview(req, res) {
    if (!req.user) {
        res.status(401).json({ message: "Please login and try again" });
        return;
    }

    const data = req.body;
    data.name = req.user.firstName + " " + req.user.lastName;
    data.profilePicture = req.user.profilePicture;
    data.email = req.user.email;

    const newReview = new Review(data);
    newReview.save()
        .then(() => {
            res.json({
                "message": "Review save successfully"
            })
        })
        .catch((err) => {
            res.status(500).send(err).json({ "message": "Review cannot save" });
        })

}


export function getReviews(req, res) {
    const user = req.user;

    if(user===null || user.role!=="admin"){        
    
    Review.find({isApproved: true})
        .then((reviews) => {
            res.json(reviews);
        })
        .catch((err) => {
            res.status(500).send(err);
        })

    }
    if(user.role==="admin"){            

        Review.find({})
        .then((reviews) => {            
            res.json(reviews);
        })
        .catch((err) => {
            res.status(500).send(err);
        })
    }
}
export function deleteReview(req, res) {
    const email = req.params.email;   
    if (!req.user) {
        res.status(401).json({ message: "Please login and try again" });
        return;
    }

    if (req.user.role == "admin") {
        Review.deleteOne({ email: email })    
        .then(() => {
            res.json({
                "message": "Review deleted successfully"
            })
        })
        .catch((err) => {
            res.status(500).send(err).json({ "message": "Review cannot delete" });        
        })  
        return;
    }
    if (req.user.role == "customer") {
    if(req.user.email==email){
        Review.deleteOne({ email: email })    
        .then(() => {
            res.json({
                "message": "Review deleted successfully"
            })
        })
        .catch((err) => {
            res.status(500).send(err).json({ "message": "you are not authorized to delete" });        
        })  
   
    }
    return;
}

    }

    export function approveReview(req, res) {
        const email = req.params.email;
        if (!req.user) {
            res.status(401).json({ message: "Please login and try again" });
            return;
        }
        if (req.user.role == "admin") {
            Review.updateOne({ email: email }, { isApproved: true })
                .then(() => {
                    res.json({
                        "message": "Review approved successfully"
                    })
                })
                .catch((err) => {
                    res.status(500).send(err).json({ "message": "Review cannot approve" });
                })
        }else{
            res.status(401).json({ message: "you are not authorized to approve approve reviews" });
            return;
        }
    }