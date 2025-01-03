import {Task} from "../models/taskModel";

export const create = async(data:any) => {
    return Task.create(data)
}

export const getTasks = async( userId:number, filter: 'all' | 'completed' | 'pending') => {
    const where = filter === 'all' ? {userId} : {userId, status: filter};
    return Task.findAll({where})
}