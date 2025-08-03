import ejs from "ejs";
import dotenv from "dotenv";
dotenv.config();
import sendeMail from "../helpers/sendMail.js";
import Order from "../models/order.model.js";


const sendPendingOrderEmail = async () => {
        const ordersWithStatusOfZero = await Order.find({ status: 0 });

        if (ordersWithStatusOfZero.length > 0) {
                for (let order of ordersWithStatusOfZero) {
                        ejs.renderFile(
                                "templates/pendingorder.ejs",
                                { name: order.name , products: order.products},
                                async (error, data) => {
                                        let messageOptions = {
                                                from: `Fake Fortuny LLC <${process.env.EMAIL}>`,
                                                to: order.email,
                                                subject: "Your Order Has Been Placed Successfully.",
                                                html: data
                                        };
                                        try {
                                                await sendeMail(messageOptions);
                                            // BECAREFUL OF THE _ID vs ID
                                            await Order.findByIdAndUpdate(order._id, {
                                                        $set: { status: 1 }
                                                });
                                        } catch (error) {
                                                console.log(error);
                                        }
                                }
                        );
                }
        }
};

export default sendPendingOrderEmail;