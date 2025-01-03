import { Request, Response } from "express";
import { create,getTasks } from "../services/taskService";

export const createTask = async( req: Request, res: Response) => {
    try {
        const task = await create(req.body);
        res.status(201).json({message: 'Task Created..!!', task})
    } catch(error:any) {
        res.status(400). json({error: error.message})
    }
}

export const getAllTasks = async( req: Request, res: Response) => {
    try {
        const { userId, filter}  = req.query;
        const tasks = await getTasks(Number(userId), filter as 'all' | 'completed' | 'pending')
        res.status(201).json({tasks})
    } catch(error:any) {
        res.status(400). json({error: error.message})
    }
}