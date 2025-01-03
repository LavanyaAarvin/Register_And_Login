import mysql from 'mysql2';
import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

// export const connectDB = async () => {
//     try {
//         const connection = await mysql.createConnection({
//             host: process.env.DB_HOST,
//             user: process.env.DB_USER,
//             password: process.env.DB_PASSWORD,
//             database: process.env.DB_NAME
//         })

//         console.log("Database connected..!!!")
//     } catch(err ) {
//         console.log(`Error connecting to the database: ${err}`);
//         process.exit(1)
//     }
// }

dotenv.config();


console.log(process.env.DB_USER, process.env.DB_PASSWORD, process.env.DB_NAME)

export const sequelize = new Sequelize(process.env.DB_NAME as string, process.env.DB_USER as string, process.env.DB_PASSWORD as string, {
    host: process.env.DB_HOST as string,
    dialect: 'mysql',
    logging: false
} )

export const connectDB = async() => {
    try {
        await sequelize.authenticate();
        console.log("Database Connected...!!!")
    } catch(err)  {
        console.log(`Error connecting to the database: ${err}`);
        process.exit(1)
    }
}