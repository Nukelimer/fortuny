import User from "../models/user.model.js";
import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";
// Registr User
// route POST /api/v1/auth/register
// @access public

const registerUser = asyncHandler(async (req, res) => {
        const { name, email, password } = req.body;
        const userExists = await User.findOne({ email });

        if (userExists) {
                res.status(400);
                throw new Error(`User already exists, Bnxn!`);
        }

        const user = await User.create({
                name,
                email,
                password
        });

        if (user) {
                generateToken(res, user._id);
                res.status(201).json({
                        _id: user._id,
                        name: user.name,
                        email: user.email
                });
        } else {
                res.status(400);
                throw new Error("Invalid user data.");
        }
});

// Login User
// route POST /api/v1/auth/register
// @access public

const loginUser = asyncHandler(async (req, res) => {
        const { email, password } = req.body;
    //   console.log("Received email:", email); // Log email
      const user = await User.findOne({ email });
    //   console.log("Found user:", user);

        if (user && (await user.matchPassword(password))) {
                generateToken(res, user._id);

                res.status(200).json({
                        _id: user._id,
                        name: user.name,
                        email: user.email
                });
        } else {
                res.status(401);
                throw new Error(`Invalid email or password, Bnxn!`);
        }
});

// Logout User
// route POST /api/v1/auth/logout
// @access public

const logoutUser = asyncHandler(async (req, res) => {
        res.cookie("jwt", "", {
                httpOnly: true,
                expires: new Date(0)
        });

        res.status(200).json({ message: "Logout Successfully" });
});

export { logoutUser, loginUser, registerUser };
