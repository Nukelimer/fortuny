import Order from "../models/order.model.js";
import asyncHandler from "express-async-handler";

// QCREATE  ORDER

const createOrder = asyncHandler(async (req, res) => {
        const newOrder = Order(req.body);

        const saveOrder = await newOrder.save();

        if (!saveOrder) {
                res.status(400);
                throw new Error("Ordeer was not created...");
        } else {
                res.status(201).json(saveOrder);
        }
});

// CREATE  {ORDER FOR ADMIN)

const updateOrder = asyncHandler(async (req, res) => {
        const updatedOrder = await Order.findByIdAndUpdate(
                req.params.id,
                { $set: req.body },
                { new: true }
        );

        if (!updatedOrder) {
                res.status(400);
                throw new Error("Order was not updated...");
        } else {
                res.status(201).json(updatedOrder);
        }
});

// DELETE  {ORDER FOR ADMIN)

const deleteOrder = asyncHandler(async (req, res) => {
        const deletedOrder = await Order.findByIdAndDelete(req.params.id);

        if (!deletedOrder) {
                res.status(400);
                throw new Error("Order was not deleted...");
        } else {
                res.status(201).json(deletedOrder);
        }
});

// GET  USER ORDER

const getUserOrders = asyncHandler(async (req, res) => {
        const gottenUserOrders = await Order.find({ userId: req.params.id }).reverse();

        if (!gottenUserOrders) {
                res.status(400);
                throw new Error("User orders was not found...");
        } else {
                res.status(201).json(gottenUserOrders);
        }
});

// GET  ALL ORDER

const getAllOrders = asyncHandler(async (req, res) => {
       const allGottenOrders = await Order.find().sort({ createdAt: -1 });

        if (!allGottenOrders) {
                res.status(400);
                throw new Error("Orders was not found...");
        } else {
                res.status(201).json(allGottenOrders);
        }
});

export { getAllOrders, getUserOrders, updateOrder, deleteOrder, createOrder };
