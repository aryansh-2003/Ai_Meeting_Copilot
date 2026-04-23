import { Message } from "../models/message.model.js"



const postMessage = async(req,res) => {
    const {user,content} = req.body
    
    if(!user || !content) return res.status(400).json("user or content missing")

    const result = await Message.create({
        owner:user?._id,
        content:content
    })


    if(!result) return res.status(500).json("Something went wrong")

    return res.status(200).json(result)
}

const getMessageHistory = async(req,res) => {
    

    const result = await Message.aggregate([
        {
            $lookup:{
                from:"users",
                localField:"owner",
                foreignField:"_id",
                as:"userData"
            }
        },
        {
            $sort:{createdAt:1}
        }
    ])


    if(!result) return res.status(500).json("Something went wrong")


            return res.status(200).json(result)


}


export {postMessage,getMessageHistory}