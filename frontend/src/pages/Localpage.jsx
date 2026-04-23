import React, { useRef, useState } from 'react'
import fs from "fs";
import Groq from "groq-sdk";
import { socket } from '../../service/socket.service';

function Localpage() {

    const [isRecording,setIsRecording] = useState(false)
        const mediaRecorderRef = useRef(null);
        const streamRef = useRef(null);
        const intervalRef = useRef(null);
        const [transcript, setTranscript] = useState("");


        async function startRecording() {
          const stream = await navigator.mediaDevices.getUserMedia({audio:true})
          streamRef.current = stream

          const againRecording = () => {
            const mediarecorder = new MediaRecorder(stream)
            mediaRecorderRef.current = mediarecorder


            mediarecorder.ondataavailable = async(event) => {
              if(event.data.size > 0){
                await send_to_groq(event.data)
              }
            }
          
              mediarecorder.start()

              setTimeout(() => {
                if(mediarecorder.state === "recording"){
                  mediarecorder.stop()
                }
              },6000)
          }
            
            againRecording()

            intervalRef.current = setInterval(againRecording,6000)
          setIsRecording(true)
              
        }

        const stopRecording = () => {
          if(intervalRef.current){
            clearInterval(intervalRef.current)
          }

          if(mediaRecorderRef.current){
            mediaRecorderRef.current.stop()

          }

          if(streamRef.current){
            streamRef.current.getTracks().forEach(track => track.stop());
          }

          setIsRecording(false)
        }

        const groq_api = ""

        async function send_to_groq(audioBlob) {
          const actualType = audioBlob.type || "audio/webm"
            const audioFile = new File([audioBlob], "chunk.webm",{type:actualType})

            const formData = new FormData()
            formData.append("file",audioFile)
            formData.append("model", "whisper-large-v3-turbo")
            formData.append("response_format","json")


            try {
              const response = await fetch("https://api.groq.com/openai/v1/audio/transcriptions",{
                method: "POST",
                headers:{
                  "Authorization": `Bearer ${groq_api}`
                },
                body: formData
              })
        // --- ADD THIS EXACT BLOCK ---

        const data = await response.json()

        // const newTranscript = transcriptRef.current + ' ' + data.text
        // transcriptRef.current = newTranscript
        // setTranscript(newTranscript)
        generateSuggestions(data.text)
        socket.emit("NewConvo",data.text)
        console.log(data.text)
              if (!response.ok) {
                // This opens the "envelope" and reads Groq's exact error message
                const errorDetails = await response.json(); 
                
                // This will print the actual reason to your console!
                console.error("🚨 GROQ ERROR REASON:", errorDetails); 
                
                throw new Error(`API Error: ${response.status}`);
              }
              
              console.log(response)
            } catch (error) {
              
            }
        } 


        const generateSuggestions = async(currentText) =>{
          try {
            const response = await fetch("https://api.groq.com/openai/v1/chat/completions",
              {
                method: "POST",
                headers: {
                  "Authorization": `Bearer ${groq_api}`,
                   "Content-type" : "application/json"
                },
                body: JSON.stringify({
                  model: "openai/gpt-oss-120b",
                  messages:[
                    {
                      role: "system",
                      content: `You are an AI meeting co-pilot. Read the transcript and suggest exactly 3 relevant, insightful questions or talking points that drive the conversation forward. 
                          Respond ONLY with a valid JSON object in this exact format:
                          { "suggestions": ["Question 1", "Question 2", "Question 3"] }`
                    },
                    {
                      role: "user",
                      content: `Transcript: ${currentText}`
                    }
                  ],
                  response_format: {type: "json_object"}
                })
              }
            )

            const data  =  await response.json()
            console.log(data.text)
          } catch (error) {
            
          }
        }


  return (
    <div>
       {!isRecording ? (
          <button onClick={startRecording} style={{ background: "green", color: "white", padding: "10px" }}>
            Start Microphone
          </button>
        ) : (
          <button onClick={stopRecording} style={{ background: "red", color: "white", padding: "10px" }}>
            Stop Recording
          </button>
        )}
    </div>
  )
}

export default Localpage
