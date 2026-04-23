import { DirectMessagePeople } from '../models/directMessagePeople.js'
import {User} from '../models/user.model.js'

const addDmPeople = async(req,res) =>{
   const {username,ownerId} = req.body
   if (!username) return res.status(404).json("Username must be provided")

      const userData = await User.findOne({username:username})
         console.log(username,userData)
      const result = await User.findByIdAndUpdate(ownerId,
        {
           $addToSet:{conversation:userData?._id}
        },{new:true}

    )

    console.log(result)

      const user_data = await User.findById(ownerId).populate('conversation')

      if (!user_data) return res.status(500).json("Something went wrong!")
      

   return res.status(200).json({contacts:user_data.conversation})

}

const getDmPeople = async(req,res) =>{
   const {ownerId} = req.query
   if (!ownerId) return res.status(404).json("User not authorized")
   
  const user_data = await User.findById(ownerId).populate('conversation')

   if (!user_data) return res.status(500).json("Something went wrong!")
      
      
   return res.status(200).json({contacts:user_data.conversation})
}

export {
   addDmPeople,
   getDmPeople
}