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
    const token = user.createjwt()
    res.status(StatusCodes.CREATED)
    res.status(StatusCodes.CREATED).
        json({ user: { name: user.name, email: user.email, location: user.location, lastname: user.lastname } })
    //.json({user: {email: user.email,lastName: user.lastName,location: user.location,name: user.name,},token,location: user.location,})
    //.json({ user: { name: user.name, lastname: user.lastname, email: user.email, location: user.location } }, token)
}
const login = (req, res) => {
    res.send('login')
}
const updateUser = (req, res) => {
    res.send('updateUser')
}

export { register, login, updateUser }