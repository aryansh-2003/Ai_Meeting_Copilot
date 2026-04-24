import { Server } from "socket.io"
import {generateResponse, generateText, searchQuery} from './aiCommuter.js'
import {chatHistory} from './chatHistory.js'
 

let io
export function initSocket(server){
io = new Server(server,{
    cors:{
        origin: "*"
    }
})


io.on("connection",(socket) => {

    console.log("client connected",socket.id)

    socket.on("disconnect",(disconnection) =>{
          
    })

    socket.on("connected", (data) => {

    })
        

    socket.on("NewConvo",async(data)=>{
        if(data){
           const suggestions = await generateResponse(data)
           socket.emit("newSuggestion",suggestions)
        }
    })

    socket.on("GetTranscription",async (data) => {
        const transcription = await generateText(data)
        if(transcription){
             socket.emit("newTranscription",transcription)
        }
    })

    socket.on("answerTheQues",async(data) => {
        if(chatHistory.length > 10) chatHistory.pop()
        chatHistory.push({ 
            role: "user", 
            content: data?.query 
        })
       const ans = await searchQuery(data?.query,data?.context,data.apiKey)
       if(ans){
           socket.emit("messageReply",ans)
           if(chatHistory.length > 10) chatHistory.pop()
           chatHistory.push({ 
            role: "assistant", 
            content: ans 
        })
       }
    })


})

}