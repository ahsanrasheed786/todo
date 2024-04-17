import mongoose from "mongoose";

// mongoose.connect("mongodb://127.0.0.1:27017/Task").then(()=>{
//     console.log("connection successfull");
// }).catch(err => console.log(err))

export default function database() {
    mongoose.connect("mongodb://127.0.0.1:27017/Task").then(()=>{
        console.log("connection successfull");
    }).catch(err => console.log(err))
}