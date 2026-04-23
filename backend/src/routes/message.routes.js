import {Router} from "express"
import { getMessageHistory, postMessage } from "../controllers/message.controller.js"


const router  = Router()

router.route('/postMessage').post(postMessage)
router.route('/getHistory').get(getMessageHistory)


export default router
