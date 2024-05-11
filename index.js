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
// core is for cross origin resource sharing if we host web server on
// different origin then we need to use cors which is a middleware will allow 
//the webserver to give access to the frontend

app.use(cors({
    origin:["http://localhost:5173"],
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
