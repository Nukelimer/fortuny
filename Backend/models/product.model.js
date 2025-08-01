import mongoose from "mongoose";
const productSchema = mongoose.Schema(
        {
                title: {
                        type: String,
                        require: true
                },
                description: {
                        type: String,
                        require: true
                },

                whatinbox: {
                        type: Array
                },

                defaultimage: {
                        type: String,
                        required: true
                },
                hoverimage: {
                        type: String,
                        required: true
                },
                video: {
                        type: String
                },

                wholesaleprice: {
                        type: Number
                },

                wholesaleminquantity: {
                        type: Number
                },

                // category: {
                //         type: String,
                //         enum: ["CUSHIONS", "SCARF", "JOURNAL", "UMBRELLA"],
                //         required: true
                // },
                // collection: {
                //         type: String,
                //         enum: ["FORTUNY HOME", "HERITAGE"],
                //         required: true
                // },
                categories: {
                        type: Array
                },
                concerns: {
                        type: Array
                },
                brand: {
                        type: String
                },
                skintype: {
                        type: Array
                },
                originalprice: {
                        type: Number
                },
                discountedprice: {
                        type: Number
                },
                instock: {
                        type: Boolean,
                        default: true
                },
                ratings: [
                        {
                                star: { type: String },
                                name: { type: String },
                                comment: { type: String },
                                postedBy: { type: String }
                        }
                ]
        },
        {
                timestamps: true
        }
);

productSchema.index({ "$**": "text " });
const Product = mongoose.model("Product", productSchema);

export default Product;
