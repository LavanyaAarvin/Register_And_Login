import { User } from "../models";
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'

dotenv.config();

export const registerUser = async(name: string, email: string, password: string) => {
    //Hash Password
    const hashPassword = await bcrypt.hash(password, 10);
    return User.create({name, email, password: hashPassword})
}

export const loginUser = async(email: string, password: string) => {
    const user = await User.findOne({ where: {email}});
    if(!user) throw new Error('User not found');
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if(!isPasswordValid) throw new Error('Invalid Password');

    const token = jwt.sign({id: user.id, email: user.email}, process.env.JWT_SECRET!, {expiresIn: '1h'});
    return { user, token}
}