import express from "express"
import cors from 'cors'



const app = express()

app.use(cors({
    origin: [process.env.LOCAL_URI,process.env.VERCEL_URI,process.env.BETTTERSTACK_URI], 
    credentials: true
}))
app.use(express.json({limit:"16kb"}))

import healthCheckRouter from './routes/healthcheck.route.js'



app.use("/api/v1/health",healthCheckRouter)



export default app;