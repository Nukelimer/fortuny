import express from "express";
import cors from "cors"
const app = express()

// add json body

app.use(express.json())




// add cors
app.use(cors())


export default app