import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

function createTransporter(config) {
        const transporter = nodemailer.createTransport(config);
        return transporter;
}

let configuration = {
        service: "gmail",
        host: "smtp.gmail.com",
        port: 587,
        requireTls: true,
        auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD
        }
};

const sendeMail = async (msgOptions) => {
        const transporter = await createTransporter(configuration);
        await transporter.verify();
        await transporter.sendMail(msgOptions, (error, info) => {
                if (error) {
                        console.log(error);
                } else {
                }
                console.log(info.response);
        });
};

export default sendeMail;
