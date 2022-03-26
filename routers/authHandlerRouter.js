import express from 'express'
const router = express.Router()
//import from controller
import { register, login, updateUser } from '../controllers/authHandlerController.js'
//import from notFoundMiddleware
import auth from '../middleware/auth.js';

router.route('/register').post(register)
router.route('/login').post(login)
router.route('/updateUser').patch(auth, updateUser)

export default router