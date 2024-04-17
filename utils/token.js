
import jwt from 'jsonwebtoken';


export const setCookies = (newUser,res,message,statuscode=200) =>{

    const token = jwt.sign({ _id: newUser._id, email: newUser.email }, "ahsanrahseedSecretCode");

    res.status(statuscode).cookie("token", token, { httpOnly: true, maxAge: 15 * 60 * 1000 }).json({
        success: true,
        msg:message
    });

}