import app from "./app.js"
import dotenv from "dotenv"
import dbConnection from "./utils/db.js"
dotenv.config()
// create server
const port = process.env.PORT
app.listen(port, () => {
    
    console.log(`This server is running on port ${port}!`);
    dbConnection()
})