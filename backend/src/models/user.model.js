import mongoose, { Schema } from  'mongoose'

const userSchema = new Schema({
    username:{
            type: String,
            required: true,
            lowercase: true,
            trim: true,
            index: true
        },
            fullname:{
            type: String,
            required: true,
            trim: true,
            index: true
        },
        avatar:{
            type: String,
            required:true
        },
        messages:[
            {
                type: Schema.Types.ObjectId,
                ref: "chatHistory"
            }
        ],
         conversation:[
            {
                type: Schema.Types.ObjectId,
                ref: "User"
            }
        ],
},{
    timestamps:true
})


export const User = mongoose.model("User",userSchema)