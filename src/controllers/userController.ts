import { Request, Response } from "express";
import { loginUser, registerUser } from "../services/userService";


//Register
export const register = async(req: Request, res: Response) => {
    try {
        const { name, email, password } = req.body;
        const user = await registerUser( name, email, password );
        res.status(201).json({message: 'User register successfully..!!',user})
    } catch(error:any) {
        res.status(400). json({error: error.message})
    }
}


//Login
export const login = async(req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const { user, token } = await loginUser(email, password);
        res.status(201).json({message: 'LoggedIn Successfully..!!', user, token})
        
    } catch(error:any) {
        res.status(400). json({error: error.message})
    }
}