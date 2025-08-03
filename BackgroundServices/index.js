import express from "express";
import cron from "node-cron";
import dotenv from "dotenv";
import dbConnection from "./utils/db.js";
dotenv.config();
const app = express();

const PORT = process.env.PORT;

// SCHEDULING SERVICES EXECUTION
const services = () => {
    cron.schedule("*/2 * * * * * *", () => {
            
        const a = new Date().toLocaleString()
                console.log("running", a);
        });
};

services()

app.listen(PORT, () => {
        console.log(`Server is up on... ${PORT}`);
        dbConnection();
});
