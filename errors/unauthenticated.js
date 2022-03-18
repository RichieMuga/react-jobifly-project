import CustomApiError from "./custom-api.js";
import { StatusCodes } from "http-status-codes";

class UnathenticatedError extends CustomApiError {
    constructor(message) {
        super(message)
        this.StatusCode = StatusCodes.UNAUTHORIZED

    }
}

export default UnathenticatedError