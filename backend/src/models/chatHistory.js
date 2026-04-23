import mongoose, { Schema } from 'mongoose'

const chatHistorySchema = new Schema({
    
    message:{
        type:Schema.Types.ObjectId,
        ref:"Message"
    }
},
    {
        timestamps:true
    }
)


export const chatHistory = mongoose.model("chatHistory",chatHistorySchema)