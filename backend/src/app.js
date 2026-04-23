import express from "express"
import cors from 'cors'



const app = express()

app.use(cors({
    origin: ["http://localhost:5173","https://yolo-virid-six.vercel.app","https://uptime.betterstack.com"], 
    credentials: true
}))
app.use(express.json({limit:"16kb"}))

import userRouter from './routes/user.routes.js'
import messageRouter from './routes/message.routes.js'
import healthCheckRouter from './routes/healthcheck.route.js'
import directMessageRouter from './routes/directMessage.routes.js'



app.use("/api/v1/health",healthCheckRouter)
app.use("/api/v1/user",userRouter)
app.use("/api/v1/message",messageRouter)
app.use("/api/v1/directMessage",directMessageRouter)


export default app;