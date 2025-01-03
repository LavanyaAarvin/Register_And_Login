import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import { connectDB } from './src/config/db';
import userRoutes from './src/routes/userRoutes';
import taskRoutes from './src/routes/taskRoutes';
import chatoutes from './src/routes/chatRoutes';
import { sequelize } from './src/config/db';

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

// app.get('/', (req, res) => {
//     res.send("Hello....!!")
// })

connectDB();

app.use('/api/vi/auth', userRoutes)
app.use('/api/vi/task', taskRoutes)
app.use('/api/vi/chat', chatoutes)


const PORT = process.env.PORT || 8080;

(async () => {
    try {
        await sequelize.sync({force:true});
        console.log("Database synchronized..!!");
        
        app.listen(PORT, () => {
            console.log(`Server listening on PORT ${PORT}`);
            
        })
        process.exit(0);
    } catch(error) {
        console.log("Error syncing : ", error);
        
    }
})();

