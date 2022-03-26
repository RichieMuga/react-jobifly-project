import { UnathenticatedError } from "../errors/index.js"
// import jwt from 'jsonwebtoken'

const auth = async (req, res, next) => {
    const authHeader = req.headers.authorization
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        throw new UnathenticatedError('Invalid authentication')
    }

    console.log('sii');

}

export default auth