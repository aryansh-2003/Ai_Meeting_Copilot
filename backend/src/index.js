import dotenv from 'dotenv'
import http from 'http'
import connectDB from './db/db.js'
import app from './app.js'
import { initSocket } from './socket/socket.js'


dotenv.config()


const httpServer = http.createServer(app)
const port = 8000
 initSocket(httpServer)



connectDB()
.then(()=>{
    httpServer.on("Error",(Error)=>{
    console.log(Error)
    })

    httpServer.listen(port,()=>{
        console.log(`App is listening on port ${port}`)
    })
})
.catch((error)=>{
    console.log("MONGO db connection failed!!!", error)
})

