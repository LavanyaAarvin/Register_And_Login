import { Sequelize, Optional, Model, DataTypes } from "sequelize";

interface TaskAttributes {
    id : number;
    userId: number;
    name: string;
    description: string;
    status: 'completed' | 'pending'
}

type TaskCreationAttributes = Optional<TaskAttributes, 'id'>;

export class Task extends Model<TaskAttributes, TaskCreationAttributes> {
    public id!: number;
    public userId!: number;
    public name!: string;
    public description!: string;
    public status!: 'completed' | 'pending'

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}


export const TaskModel = (sequelize: Sequelize) => Task.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        status: {
            type: DataTypes.ENUM('completed', 'pending'),
            allowNull: false,
            defaultValue: 'pending'
        }
    }, {
        sequelize,
        modelName: 'Task',
        tableName: 'tasks',
        timestamps: true
    }
)