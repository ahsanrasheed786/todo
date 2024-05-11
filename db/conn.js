import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
const databaseName=process.env.DATABASE_NAME
const MongoDbUrl=process.env.MONGODB_URL
export default function database() {
    mongoose.connect(`${MongoDbUrl}${databaseName}`).then(()=>{
        const db = mongoose.connection;
      console.log(`connection successfull with ${db.host}:${db.port}`);
    }).catch(err => console.log(` Connection Failed ${err}`))
}