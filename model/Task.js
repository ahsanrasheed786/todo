import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    title:{
        required: true,
        type: String,
        // unique: true
    },
    description:{
        required: true,
        type: String,
        // unique: true
    },
    isCompleted:{
        type: Boolean,
        default:false
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    createdAt:{
type :Date,
default: Date.now()
    } 
})

export const Task=mongoose.model('Task',userSchema);