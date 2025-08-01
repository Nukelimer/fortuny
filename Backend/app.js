import express from "express";
import cors from "cors"
import { errorHanddler, notFound } from "./middleware/error.middleware.js";
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth.route.js"
import productRoute from "./routes/product.route.js";
const app = express()
// add cors
app.use(cors())

// add json body
app.use(express.json())

// cookies parser
app.use(cookieParser())

// register routes
app.use("/api/v1/auth", authRoute)
app.use("/api/v1/products", productRoute);
// error middleware
app.use(notFound)
app.use(errorHanddler);


export default app