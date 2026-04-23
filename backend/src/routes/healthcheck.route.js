import {Router} from 'express'
import { healthOfServer } from '../controllers/healtCheck.controller.js'

const router = Router()


router.route('/helalthChecker').get(healthOfServer)

export default router