export const errorHandler = (error, req, res, next) => {
    console.log(error);
    return res.status(501).send('internal server error')
}