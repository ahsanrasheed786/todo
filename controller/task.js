import { Task } from "../model/Task.js";


export const newTask = async(req, res) => {


    const { title, description} = req.body;

try {
    
    const newTask = await Task.create({
        title,
        description,
        user:req.user,
    });

    res.status(201).json(
        {
            sucess: true,
            message: "new task created",
        },
    );
} catch (error) {
    res.send(error);
}
}

export const getMytasks  = async(req, res) => {
const userId=req.user._id;

// console.log(userId)
try {
    const mytask = await Task.find({user:userId});
    if (!mytask) {
        return res.status(400).json({ msg: "your task not found",mytask });
    }
   
    res.status(200).json({ msg: "Your task",mytask });
   
    
    
} catch (error) {
    res.status(500).json({ msg: "Server Error" });
}
   
}


export const IsCompletedTask =async(req,res) =>{

    try {
        const task = await Task.findById(req.params.id);


        task.isCompleted=!task.isCompleted;
        await task.save();
        res.status(400).json({ msg: "task updated sucessfully",task });
    } catch (error) {
        return res.status(404).json({ msg: "Task not found" });
    }
}

export const deleteTask =async(req,res) =>{

try {
    const task = await Task.findById(req.params.id);

    await task.deleteOne();
    res.status(400).json({ msg: "task updated sucessfully",task });

    // res.status(400).json({ msg: "Task deleted",task });
    
} catch (error) {
    return res.status(404).json({ msg: "Task not found" });

}
   

}