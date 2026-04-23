import mongoose, { Schema } from 'mongoose'

const directMessagePeopleSchema = new Schema(
    {
    ownerId:{
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    usersId:[
        {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    ]
    
},{ timestamps:true }
)


export const DirectMessagePeople = mongoose.model('DirectMessage',directMessagePeopleSchema)