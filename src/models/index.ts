import { Sequelize } from "sequelize";
import { UserModel } from "./userModel";
import { TaskModel } from "./taskModel";
import { ChatModel } from "./chatModel";
import { sequelize } from "../config/db";

const User = UserModel(sequelize);
const Task = TaskModel(sequelize);
const Chat = ChatModel(sequelize);


User.hasMany(Task, { foreignKey: 'userId', as: 'tasks'});
Task.belongsTo(User, {foreignKey: "userId", as: 'user'});

export { sequelize, User, Task, Chat};