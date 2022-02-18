import { StatusCodes } from "http-status-codes"

export const errorHandler = (error, req, res, next) => {
    const defaultError = {
        statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
        msg: "Sorry something went wrong try again later"
    }
    if (error.name === 'ValidationError') {
        defaultError.statusCode = StatusCodes.BAD_REQUEST
        defaultError.msg = error.message

    }
    // console.log(error);
    // return res.status(defaultError.statusCode).json({ msg: defaultError.msg })
    return res.status(defaultError.statusCode).json({ msg: error })

}

