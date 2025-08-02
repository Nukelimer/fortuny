import Product from "../models/product.model.js";
import asyncHandler from "express-async-handler";

// CREATE PRODUCT

const createProduct = asyncHandler(async function (req, res) {
        const newProduct = await Product(req.body);
        const product = newProduct.save();

        if (product) {
                res.status(201).json(product);
        } else {
                res.status(400);
                throw new Error("Product was not created");
        }
});

// UPDATE PRODUCT

const updateProduct = asyncHandler(async function (req, res) {
        const updatedProduct = await Product.findByIdAndUpdate(
                req.params.id,
                {
                        $set: req.body
                },
                { new: true }
        );

        if (!updateProduct) {
                res.status(400);
                throw new Error("Product has not been updated!");
        } else {
                res.status(201).json(updatedProduct);
        }
});

// DELETE PRODUCT

const deleteProduct = asyncHandler(async function (req, res) {
        const product = await Product.findByIdAndDelete(req.params.id);

        if (!product) {
                res.status(400);
                throw new Error("Product was not deleted");
        } else {
                res.status(201).json("Product was deleted successfully.");
        }
});

// GET PRODUCT

const getProduct = asyncHandler(async function (req, res) {
        const product = await Product.findById(req.params.id);

        if (!product) {
                res.status(400);
                throw new Error("Product was not found");
        } else {
                res.status(200).json("Product was found!.");
        }
});

// GET ALL PRODUCT

const getAllProduct = asyncHandler(async function (req, res) {
        const newQuery = req.query.new;
        const queryCategory = req.query.category;
        const querySearch = req.query.search;
        // const product = await Product.findById(req.params.id);
        let products;
        if (newQuery) {
                products = await Product.find().sort({ createdAt: -1 });
        } else if (queryCategory) {
                products = await Product.find({ categories: { $in: [queryCategory] } });
        } else if (querySearch) {
                products = await Product.find({
                        $text: {
                                $search: querySearch,
                                $caseSensitive: false,
                                $dicriticSensitive: false
                        }
                });
        } else {
                products = await Product.find().sort({ createdAt: -1 });
                res.status(200).json(products);
        }
});

// RATE PRODUCT

const rateProduct = asyncHandler(async function (req, res) {
        const { star, name, comment, postedBy } = req.body;
        if (star && name && comment && postedBy) {
                const postedBy = await Product.findByIdAndUpdate(
                        req.params.id,
                        {
                                $push: { ratings: { star, name, comment, postedBy } }
                        },
                        { new: true }
                );
                res.status(201).json("Product was rated successfully.");
        } else {
                res.status(400);
                throw new Error("Product rating was not successful.");
        }
});

export { rateProduct, createProduct, getProduct, deleteProduct, getAllProduct, updateProduct };
