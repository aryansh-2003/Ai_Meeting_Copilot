import {Router} from 'express'
import { addDmPeople, getDmPeople } from '../controllers/directMessage.controller.js'

const router = Router()

router.route('/addPeople').post(addDmPeople)
router.route('/getDmPeople').get(getDmPeople)


export default router