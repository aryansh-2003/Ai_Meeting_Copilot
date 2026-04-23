import mongoose, { Schema } from 'mongoose'

const directMessageSchema = new Schema(
    {
    ownerId:{
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    sendToId:{
        type: Schema.Types.ObjectId,
        ref:"User",
        required: true
    },
    message:{
        type: String,
        required: true
    }
    
},{ timestamps:true }
)


export const DirectMessage = mongoose.model('DirectMessage',directMessageSchema)