import {
        createProduct,
        getAllProduct,
        deleteProduct,
        getProduct,
        rateProduct,
        updateProduct
} from "../controllers/product.controller.js";

import express from "express";
const router = express.Router();

// RATING PRODUCT ROUTE
router.put("/rating/:productId", rateProduct);

// GET ALL PRODUCTS
router.get("/", getAllProduct);

// GET ONE PRODUCTS
router.get("/find/:id", getProduct);

// CREATE PRODUCT
router.post("/", createProduct);

// UPDATE PRODUCT
router.put("/:id", updateProduct);

// DELETE PRODUCT
router.delete("/:id", deleteProduct);

export default router;
