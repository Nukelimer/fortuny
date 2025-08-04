import express from "express";
import cron from "node-cron";
import dotenv from "dotenv";
import dbConnection from "./utils/db.js";
import sendWelcomeEmail from "./EmailServices/sendWelcomeEmail.js";
import sendPendingOrderEmail from "./helpers/sendPendingOrderEmail.js";
import sendDeliveredEmail from "./helpers/sendDeliveredEmail.js";
dotenv.config();
const app = express();

const PORT = process.env.PORT;

// SCHEDULING SERVICES EXECUTION
const services = () => {
    cron.schedule("* * * * * *", () => {
            
        const a = new Date().toLocaleString()
        console.log("running", a);
        
        sendWelcomeEmail()
        sendPendingOrderEmail()
        sendDeliveredEmail();
        });
};

const sendPromotionalEmailServices = () => {
        cron.schedule("0 0 8 1 * *", () => {
             
            console.log("promotion service",);
            
            sendPromotionalEmailServices()

          
        });
};

services()
sendPromotionalEmailServices()

app.listen(PORT, () => {
        console.log(`Server is up on... ${PORT}`);
        dbConnection();
});


