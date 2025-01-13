import express from "express";
import { addReview, approveReview, deleteReview, getReviews } from "../controllers/reviewController.js";



const reviewRouter = express.Router();

reviewRouter.post("/", addReview);
reviewRouter.get("/", getReviews);
reviewRouter.put("/approve/:email", approveReview);

//// THIS TYPE OF ROUTE IS CALLED PARAMETERIZED ROUTE SHOULD BE AT THE END
reviewRouter.delete("/:email", deleteReview);



export default reviewRouter;