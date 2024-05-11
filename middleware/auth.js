import { User } from '../model/user.js';
import jwt from 'jsonwebtoken';

export const isAuthenticated = async (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({
            success: false,
            message: "Please Login First"
        });
    }

    try {
        // Verify the token and decode it
        const decoded = jwt.verify(token, "ahsanrahseedSecretCode");

        // Find the user based on the decoded user ID from the token
        const user = await User.findOne({ _id: decoded._id });

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Invalid token"
            });
        }
// saving the user in req.user
        req.user = user;


    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Invalid token"
        });
    }

    next();
}
