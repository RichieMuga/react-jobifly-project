import User from "../models/user.js"
import { StatusCodes } from "http-status-codes"
import { BadRequestError } from '../errors/index.js';

const register = async (req, res) => {
    const { name, email, password } = req.body
    if (!name || !email || !password) {
        throw new BadRequestError('please provide all values')
    }
    const userAlreadyHasAccount = await User.findOne({ email })
    if (userAlreadyHasAccount) {
        throw new BadRequestError('Email already in use')
    }
    const user = await User.create({ name, email, password })
    user.createjwt()
    res.status(StatusCodes.CREATED).json(user)
}
const login = (req, res) => {
    res.send('login')
}
const updateUser = (req, res) => {
    res.send('updateUser')
}

export { register, login, updateUser }