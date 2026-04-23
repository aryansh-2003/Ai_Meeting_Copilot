import Groq, { toFile } from "groq-sdk"
import fs from 'fs';
import { chatHistory } from "./chatHistory.js";




const generateResponse = async (data) => {
    if(data?.apiKey === null) return ["Please provide apikey"]
    try {
            const groq = new Groq({
            apiKey: data?.apiKey
        })
        const response = await groq.chat.completions.create({
             model: "openai/gpt-oss-120b",
              messages:[
                {
                  role: "system",
                  content: `You are an expert AI meeting co-pilot. Analyze the provided meeting transcript and generate exactly three contextual responses:

                            1. A meaningful and insightful question to ask based on the current context.
                            2. A relevant talking point to drive the conversation forward.
                            3. A deeply researched fact-check of a claim made in the transcript, OR an accurate answer to a question asked by a user.
                            Respond ONLY with a valid JSON object in this exact format:
                            { "Response": ["<question>", "<talking point>", "<fact-check or answer>"] }`
                 },
                {
                  role: "user",
                  content: `Transcript: ${data?.contextText}`
                }
                ],
                response_format: {type: "json_object"}
        })

        const suggestions = response.choices[0]?.message

        const final_Suggestions = JSON.parse(suggestions.content)

        return final_Suggestions
    } catch (error) {
        console.log("Error Generating Response",error)
    }
}


const generateText = async (data) => {
    if(data?.apiKey === null) return "Please provide apikey"
    try {
        const groq = new Groq({
            apiKey: data?.apiKey
        })
        const audioFile = await toFile(data?.audio, 'chunk.webm', { 
            type: 'audio/webm' 
        });
        const response = await groq.audio.transcriptions.create({
        file: audioFile, 
        model: "whisper-large-v3-turbo", 
      });


            return response.text
        } catch (error) {
            console.log("Error Generating Response",error)
        }
    }



    const searchQuery = async (userQuery, transcriptContext,apiKey) => {
     if(apiKey === null) return "Please provide apikey"
        const groq = new Groq({
            apiKey: apiKey
        })
        const completion = await groq.chat.completions.create({
        model: "openai/gpt-oss-120b",
        messages: [
        { 
            role: "system", 
            content: `You are an AI meeting assistant. Meeting context so far: ${transcriptContext}` 
        },
        ...chatHistory,
        { 
            role: "user", 
            content: userQuery 
        }
        ],
        temperature: 0.5, 
    });
       return (completion.choices[0].message.content)
    }

export {generateResponse,generateText,searchQuery}
