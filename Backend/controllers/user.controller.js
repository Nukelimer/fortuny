import User from "../models/user.model.js";
import asyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";

// UPDATE USER
const updateUser = asyncHandler(async function (req, res) {
        if (req.body.password) {
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt);
                res.status(201).json(product);
        }
        const updatedUser = await User.findByIdAndUpdate(
                req.params.id,
                { $set: req.body },
                { new: true }
        );

        if (!updatedUser) {
                res.status(400);
                throw new Error("USer was not updated");
        } else {
                res.status(201).json(updatedUser);
        }
});

// DELETE USER
const deleteUser = asyncHandler(async function (req, res) {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) {
                res.status(400);
                throw new Error("User was not deleted");
        } else {
                res.status(201).json("User was deleted successfully.");
        }
});


// GET ONE USER
const getUser = asyncHandler(async function (req, res) {
        const gottenUser = await User.findBy(req.params.id);
        if (!gottenUser) {
                res.status(400);
                throw new Error("User was not found,");
        } else {
                res.status(201).json("User was deleted successfully.");
        }
});


// GET ALL USER
const getAllUser = asyncHandler(async function (req, res) {
        const getAllUsers = await User.find();
    if (!getAllUsers) {
                res.status(400);
                throw new Error("All users were not found,");
        } else {
                res.status(201).json(getAllUsers);
        }
});


export {getAllUser, deleteUser, updateUser, getUser}