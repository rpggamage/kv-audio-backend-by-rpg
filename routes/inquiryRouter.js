import express from "express";
import { addInquiry, deleteInquiry, getInquiries} from "../controllers/inquiryController.js";


const inquiryRouter = express.Router();

inquiryRouter.post("/", addInquiry);
inquiryRouter.get("/", getInquiries);
inquiryRouter.delete("/", deleteInquiry);

export default inquiryRouter;