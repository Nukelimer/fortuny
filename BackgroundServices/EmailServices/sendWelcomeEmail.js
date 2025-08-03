import ejs from "ejs";
import dotenv from "dotenv";
dotenv.config();
import sendeMail from "../helpers/sendMail.js";
import User from "../models/user.model.js";

const sendWelcomeEmail = async () => {
        const usersWithStatusOfZero = await User.find({ status: 0 });

        if (usersWithStatusOfZero.length > 0) {
                for (let user of usersWithStatusOfZero) {
                        ejs.renderFile(
                                "templates/welcome.ejs",
                                { name: user.name },
                                async (error, data) => {
                                        let messageOptions = {
                                                from: `Fake Fortuny LLC <${process.env.EMAIL}>`,
                                                to: user.email,
                                                subject: "Welcome to {ADD COMPANY NAME}",
                                                html: data
                                        };
                                        try {
                                                await sendeMail(messageOptions);
                                                await User.findByIdAndUpdate(user.id, {
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


export default sendWelcomeEmail