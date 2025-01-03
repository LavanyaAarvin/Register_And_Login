import { Sequelize, Optional, Model, DataTypes } from "sequelize";

interface ChatAttributes {
    id : number;
    sender: string;
    message: string;
    timestamp: Date
}

type ChatCreationAttributes = Optional<ChatAttributes, 'id'>;

export class Chat extends Model<ChatAttributes, ChatCreationAttributes> {
    public id!: number;
    public sender!: string;
    public message!: string;
    public timestamp!: Date;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}


export const ChatModel = (sequelize: Sequelize) => Chat.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        sender: {
            type: DataTypes.STRING,
            allowNull: false
        },
        message: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        timestamp: {
            type: DataTypes.DATE,
            allowNull: false,
        }
    }, {
        sequelize,
        modelName: 'Chat',
        tableName: 'chats',
        timestamps: true
    }
)