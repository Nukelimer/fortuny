import express from "express";
const router = express.Router();
import {
        getAllOrders,
        getUserOrders,
        updateOrder,
        deleteOrder,
        createOrder
} from "../controllers/order.controller.js";
import { protect } from "../middleware/auth.middleware.js";

// CREATE ORDER
router.post("/", createOrder);

// DELETE ORDER
router.delete("/:id", deleteOrder);

// UPDATE ORDER
router.put("/:id", updateOrder);

// GET ALL ORDER
router.get("/", protect, getAllOrders);

// GET SINGLE ORDER
router.get("/find/:userId", getUserOrders);

export default router;
