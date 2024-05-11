import { User } from '../model/user.js'; 
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import { setCookies } from '../utils/token.js';

export const registered = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const already = await User.findOne({ email: email });
        if (already) {
            return res.status(400).json({ msg: "User already exists" });
        }
        const hashPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({ name, email, password: hashPassword }); // corrected object property names

        setCookies(newUser, res ,"User created successfully",201);
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Server Error" });
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body;

    try {

   //i have use select here becaue i cant acess passward without select because i have select false in model
//    password: {
//     type: String,
//     required: true,
//     select: false
// }
        const user = await User.findOne({ email }).select("+password");
        if (!user) {
            return res.status(400).json({ msg: "User does not exist" });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: "Invalid password" });
        } else {
            setCookies(user, res ,`welcome Back, ${user.name}`,200);

        }
    } catch (error) {
        res.status(500).json({ msg: 'Server Error','error':error});
    }
}

export const logOut = (req, res) => {

      
        res.status(208).cookie("token", "", { maxAge: 1 }). json({ msg: 'logout sucessfully'});
    
}

export const getmyprofiles= (req, res) => {
        res.status(200).json(
            {
                sucess:true,
                user:req.user
            },
            )
}