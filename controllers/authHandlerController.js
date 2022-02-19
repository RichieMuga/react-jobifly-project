import User from "../models/user.js"
import { StatusCodes } from "http-status-codes"

class CustomApiError extends Error {
    constructor(message) {
        super(message)
    }
}

class BadRequestError extends CustomApiError {
    constructor(message) {
        super(message)
        this.statusCode = StatusCodes.BAD_REQUEST
    }
}
class NotFoundError extends CustomApiError {
    constructor(message) {
        super(message)
        this.statusCode = StatusCodes.NOT_FOUND
    }
}

const register = async (req, res) => {
    const { name, email, password } = req.body
    if (!name || !email || !password) {
        throw new BadRequestError('please provide all values')
    }
    const user = await User.create(name, email, password)
    res.status(StatusCodes.CREATED).json(user)
}
const login = (req, res) => {
    res.send('login')
}
const updateUser = (req, res) => {
    res.send('updateUser')
}

export { register, login, updateUser }