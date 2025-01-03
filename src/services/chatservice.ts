import { Chat } from '../models/chatModel';
import { sequelize } from '../config/db';

interface ChatData {
    userId: number;
    sender: string;
    message: string;
    timestamp: Date
}

export const importChats = async(chatData: ChatData[]) => {
    const data = await sequelize.transaction();
    try {
        const validChats = chatData.filter((chat) =>  {return chat.userId && chat.message && chat.timestamp});
        if(validChats.length === 0) {
            throw new Error('No valid chat data')
        } 
        await Chat.bulkCreate(validChats, {data} as any);

        await data.commit()
    }catch(error:any) {
        await data.rollback();
        throw new Error(`Failed to import : ${error.message}`)
    }
}