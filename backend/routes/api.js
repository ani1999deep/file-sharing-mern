import express from "express";
import { UploadController } from "../controller/uploadController";

const router = express.Router();

router.post("/upload", UploadController);

export default router;
