import Banner from "../models/banner.model.js";
import asyncHandler from "express-async-handler";

// CREATE BANNER

const createBanner = asyncHandler(async function (req, res) {
        const newBanner = Banner(req.body);
        const savedBanner = newBanner.save();

        if (!savedBanner) {
                res.status(400);
                throw new Error("Banner was not created...");
        } else {
                res.status(200).json(savedBanner);
        }
});



// DELETE BANNER

const deleteBanner = asyncHandler(async function (req, res) {
        const banner = await Banner.findByIdAndDelete(req.params.id);


        if (!banner) {
                res.status(400);
                throw new Error("Banner was not deleted...");
        } else {
                res.status(201).json("Banner was deleted successfully");
        }
});


// GET ALL BANNERS

const getAllBanner = asyncHandler(async function (req, res) {
        const banners = await Banner.find();


        if (!banners) {
                res.status(400);
                throw new Error("Banners was not seen...");
        } else {
                res.status(200).json(banners);
        }
});

// GET RANDOM BANNERS

const getRandomBanner = asyncHandler(async function (req, res) {
        const banners = await Banner.find();


        if (!banners) {
                res.status(400);
                throw new Error("Random banners was not seen...");
        } else {

            const x = Math.floor(Math.random() * banners.length)
            const y = banners[x]
                res.status(200).json(y);
        }
});


export {getAllBanner, getRandomBanner, deleteBanner, createBanner}