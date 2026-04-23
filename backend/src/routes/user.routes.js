import {Router} from "express"
import { deleteUser, getUser, logInUser } from "../controllers/user.controller.js"


const router  = Router()

router.route('/loginUser').post(logInUser)
router.route('/getUser').get(getUser)
router.route('/deleteUser').post(deleteUser)



export default router
