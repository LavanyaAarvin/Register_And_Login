import { Request, Response } from "express";
import { parseToExcel } from "../utils/excelUtils";
import { importChats } from '../services/chatservice'

export const importChat = async(req: Request, res: Response) => {
    try {

        const file = req.file;
        if(!file) throw new Error('No file uploaded');

        const chatData = parseToExcel(file.path);
        await importChats(chatData as any)

    }catch(err:any) {
        res.status(400). json({error: err.message})
    }
}