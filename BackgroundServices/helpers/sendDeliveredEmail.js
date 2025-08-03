import ejs from "ejs";
import dotenv from "dotenv";
dotenv.config();
import sendeMail from "./sendMail.js";
import Order from "../models/order.model.js";

const sendDeliveredEmail = async () => {
        const ordersWithStatusOfTwo = await Order.find({ status: 2 });

        if (ordersWithStatusOfTwo.length > 0) {
                for (let orders of ordersWithStatusOfTwo) {
                        ejs.renderFile(
                                "templates/deliveredorder.ejs",
                            {
                                name: user.name,
                                products: orders.products
                            },
                                async (error, data) => {
                                        let messageOptions = {
                                                from: `Fake Fortuny LLC <${process.env.EMAIL}>`,
                                                to: orders.email,
                                                subject: "Your Item Has Been Delivered",
                                                html: data
                                        };
                                        try {
                                                await sendeMail(messageOptions);
                                                await Order.findByIdAndUpdate(user._id, {
                                                        $set: { status: 3 }
                                                });
                                        } catch (error) {
                                                console.log(error);
                                        }
                                }
                        );
                }
        }
};

export default sendDeliveredEmail;
