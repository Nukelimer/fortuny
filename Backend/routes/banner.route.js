import express from "express";
const router = express.Router();

import {
        createBanner,
        deleteBanner,
        getAllBanner,
        getRandomBanner
} from "../controllers/banner.controller.js";

//  CREATE BANNER
router.post("/", createBanner);

//  GET ALL BANNER
router.get("/", getAllBanner);

//  DELETE BANNER
router.delete("/:id", deleteBanner);

//  GET RANDOM BANNER
router.get("/random", getRandomBanner);

export default router;
