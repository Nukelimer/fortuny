import jwt from "jsonwebtoken"
import asyncHandler from "express-async-handler"
import User from "../models/user.model.js";
import dotenv from "dotenv"

dotenv.config()


const protect = asyncHandler(async (req, res, next) => {
    let token;
    token = req.cookies.jwt


    if (token) {
        try {
            const decodedToken = jwt.verify(token, process.env.JWT_SEC)  
            req.user = await User.findById(decodedToken.userId).select("-password");
            next()
        } catch (error) {
            res.status(401)
            throw new Error("Not autorized due to invalid token.");
            
        }
    } else {
        res.status(401)
        throw new Error("Acrion not authorizes due to no available token!");
        
    }
})

export {protect}