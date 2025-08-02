import mongoose from "mongoose";

const bannerSchema = mongoose.Schema(
        {
                title: {
                        type: String,
                        required: true
                },
                subtitle: {
                        type: String,
                        required: true
                },
                img: {
                        type: String,
                        required: true
                },
                img: {
                        type: String,
                        required: true
                }
        },
        { timestamp: true }
);

const Banner = mongoose.model("Banner", bannerSchema);

export default Banner;
