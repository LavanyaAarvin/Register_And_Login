import { Router } from "express";
import { importChat } from "../controllers/chatController";
import multer from 'multer'

const router = Router();
const upload = multer({dest: 'uploads/'})

router.post('/import', upload.single('file'), importChat);


export default router;