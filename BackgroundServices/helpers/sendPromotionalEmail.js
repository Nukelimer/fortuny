import ejs from "ejs";
import dotenv from "dotenv";
dotenv.config();
import sendeMail from "../helpers/sendMail.js";

import User from "../models/user.model.js";

const sendPromotionalEmail = async () => {
    const users = await User.find();
    const products = await User.aggregate([{
        $sample: {size:5}
    }])

        if (users.length > 0) {
                for (let user of users) {
                        ejs.renderFile(
                                "templates/promotion.ejs",
                            {
                                
                                products
                            },
                                async (error, data) => {
                                        let messageOptions = {
                                                from: `Fake Fortuny LLC <${process.env.EMAIL}>`,
                                                to: user.email,
                                                subject: "YYou Might Be Intrested In These Products.",
                                                html: data
                                        };
                                        try {
                                                await sendeMail(messageOptions);
                                            
                                        } catch (error) {
                                                console.log(error);
                                        }
                                }
                        );
                }
        }
};

export default sendPromotionalEmail;
