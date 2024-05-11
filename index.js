import express from 'express';
import dotenv from 'dotenv';
import database from './db/conn.js';
import UserRouter from './routes/user.js'
import taskRouter from './routes/task.js'
import cors from 'cors';
import cookieParser from 'cookie-parser';

dotenv.config(); 

const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

const frontend_url=process.env.FRONTEND_URL
app.use(cors({
    // origin:["http://localhost:5173"],
    origin:[`${frontend_url}`],
    methods:["GET","POST","PUT","DELETE","PATCH"],
    credentials:true    
}))
// Connect to the database
database();

app.use(express.json());



app.use("/api/v1/users",UserRouter)
app.use("/api/v1/task",taskRouter)


app.listen(4000, () => {
    console.log('Listening on port 4000');
});
